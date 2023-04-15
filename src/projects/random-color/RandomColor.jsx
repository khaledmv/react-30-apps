import React from 'react'

const RandomColor = () => {


    const changeBg = (e) => {
        let body = document.querySelector("body")
        body.style.backgroundColor = RandomColor();
    }

    const RandomColor =() =>{
        let colorCode = "0123456789ABCDEF";
        let color = "#";
        for(let i = 0; i < 6; i++){
            color += colorCode[Math.floor(Math.random()* 16 )]
        }
        return color;
    }
  return (
    <div className='w-full h-screen flex justify-center items-center '>
        <button 
        className='bg-cyan-300 text-4xl text-white py-2 px-4 border-l-4 border-cyan-700 rounded-sm'
        onClick={(e) => changeBg(e)}
        > Change Color </button>
    </div>
  )
}

export default RandomColor