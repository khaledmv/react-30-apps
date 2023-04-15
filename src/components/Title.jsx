import React from 'react'

const Title = ({classes, text}) => {
  return (
    <div className={!classes ? 'text-2xl' : classes}><h1>{!text? 'This is title' : text }</h1></div>
  )
}

export default Title