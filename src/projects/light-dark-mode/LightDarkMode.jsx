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
                    docBody.classList.remove("bg-dark");
                    docBody.classList.add("bg-light");
                break;

            case themes.dark:
                docBody.classList.remove("bg-light");
                docBody.classList.add("bg-dark");
                break;  
                
            default:
                docBody.classList.remove("bg-dark");
                docBody.classList.add("bg-light");
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