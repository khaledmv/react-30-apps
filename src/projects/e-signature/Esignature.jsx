import React, { useState } from 'react'
import Title from '../../components/Title'

import './e-signature.styles.scss'

const Esignature = () => {
  const [name, setName] = useState("Khaled");
  const [date, setDate] = useState("")

  const handleNameChange = (e) => {
    setName(e.target.value)
  };
 
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const inputStyle = {
    border: "none",
    padding: "10px 20px",
    borderBottom: "2px dotted",
    outline:"none",
  };
  document.body.style.background = "#eee";
  return (
    <div className='container text-container'>
      <div className='content'>
        <Title clasess={"subtitle"} text={name} />
        <Title clasess={"subtitle"} text={date} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
      <div className='footerArea'>
        <input 
        type="date" 
        value={date}
        onChange={handleDateChange} 
        style={inputStyle} />
        <input type="text" value={name} onChange={handleNameChange} style={inputStyle} />
      </div>
    </div>
  )
}

export default Esignature