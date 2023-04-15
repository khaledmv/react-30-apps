import React from 'react'
import Button from '../../components/Button';

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
        <Button changeBg={changeBg} classes={' bg-green-300 text-base rounded-sm border-l-4 mx-4 border-green-400'} />
        <Button changeBg={changeBg} classes={' bg-green-400 text-base rounded-sm border-l-4 mx-4 border-green-600'} />
        <Button changeBg={changeBg} classes={' bg-green-500 text-base rounded-sm border-l-4 mx-4 border-green-800'} />
        <Button changeBg={changeBg} classes={' bg-green-600 text-base rounded-sm border-l-4 mx-4 border-green-900'} />
    </div>
  )
}

export default RandomColor