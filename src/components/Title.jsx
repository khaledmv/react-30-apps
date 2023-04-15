import React from 'react'

const Title = ({classes, text}) => {
  return (
    <div className={!classes ? 'text-2xl' : classes}>{!text? 'This is title' : text }</div>
  )
}

export default Title