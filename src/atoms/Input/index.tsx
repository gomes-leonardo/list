import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import { StyleInput } from './style'
import { InputProps } from './type'

const Input: React.FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  onChange,
  ...props
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <StyleInput placeholder={placeholder} onChange={handleChange} {...props} />
  )
}

export default Input
