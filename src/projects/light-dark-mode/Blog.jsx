import React, { useContext} from 'react'
import Title from '../../components/Title'
import { ThemeContext } from './context/theme-context'

const Blog = () => {
  const {theme, changeTheme} = useContext(ThemeContext)
  return (
    <div className='relative mx-auto max-w-7xl h-screen flex items-center justify-center'>
    <nav>
        <button 
        className="absolute right-4 top-4 bg-gray-700 font-bold text-white px-4 py-2"
        onClick={changeTheme}
        >{theme === "dark" ? "Light" : "Dark" }</button>

    </nav>
    <div className='py-6 text-center px-10'>
    <Title classes={"text-3xl font-bold text-blue-500 my-10"} text={"This is Header Component "}/>
    <p className='para text-lg font-medium text-gray-600 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
    </div>
  )
}

export default Blog