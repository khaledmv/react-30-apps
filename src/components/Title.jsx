import React from 'react'

export default function Title({clasess, text}) {
  return (
    <h1 className={!clasess ? 'title text-center' : clasess}> {!text ? "Title" : text } </h1>
  )
}
