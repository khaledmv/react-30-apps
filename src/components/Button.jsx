import React from 'react'

const Button = ({children, changeBg, classes}) => {
  return (
    <button onClick={changeBg} className={ `${classes} py-4 px-8 `}> {!children ? 'Click' : children } </button>
  )
}

export default Button