import React from 'react'

export const FirstComponents = (props) => {
  const {
    title, 
    subtitle = 'Soy un subtitulo'
  } = props;
    return (
    <>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </>
  )
}
