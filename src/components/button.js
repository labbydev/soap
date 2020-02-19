import React from "react"

const sizes = {
  default: `py-4 px-4`,
  lg: `py-8 px-8 text-xl`,
  sm: `py-2 px-2`,
}

const Button = ({ children, size }) => {
  return (
    <button className={`
      ${sizes[size] || sizes.default}
      bg-blue-600 rounded text-white hover:bg-blue-300
    `}>
      { children }
    </button>
  )
}

export default Button