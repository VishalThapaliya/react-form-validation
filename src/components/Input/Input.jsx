import React, { useState } from 'react'
import './Input.css'

const Input = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  }

  return (
    <div className='input-container'>
        <label>{label}</label>
        <input 
          {...inputProps} 
          onChange={onChange} 
          onBlur={handleFocus}
          onFocus={() => inputProps.className === "confirmPassword" && setFocused(true)} 
          focused={focused.toString()}
        />
        <span className='error-message'>{errorMessage}</span>
    </div>
  )
}

export default Input