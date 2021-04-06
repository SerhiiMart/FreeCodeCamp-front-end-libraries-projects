import React from 'react'

function Button({buttonDispName, clickHandler}) {
  return (
    <button onClick={clickHandler}>{buttonDispName}</button>
  )
}

export default Button
