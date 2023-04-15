import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import { ThemeContext, themes } from './context/theme-context';
const LightDarkMode = () => {
    const [theme, setTheme] = useState(themes.light);
    
    const changeTheme = () => {
            theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
    };

    let docBody = document.body;
    useEffect(() =>{
        switch(theme){
            case themes.light:
            
                    docBody.classList.remove("bg-gray-500");
                    docBody.classList.add("bg-gray-200");
                break;
            case themes.dark:
                docBody.classList.remove("bg-gray-200");
                docBody.classList.add("bg-gray-500");
                break;  
            default:
                docBody.classList.remove("bg-gray-500");
                docBody.classList.add("bg-gray-200");
                break;

        }
    }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, changeTheme}} >
        <Blog  />
    </ThemeContext.Provider>
  )
}

export default LightDarkMode