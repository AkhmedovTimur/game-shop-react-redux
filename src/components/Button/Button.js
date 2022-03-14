import React from 'react';
import './button.css'

function Button({
  onclick,
  type,
  children,
  size = 's'
}) {
  return (
    <button>
      {children}
    </button>



  )
}


export default Button
