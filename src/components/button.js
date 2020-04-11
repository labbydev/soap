import React from "react"

const sizes = {
  default: `py-2 px-4 m-2`,
  lg: `py-4 px-8 text-xl m-2`,
  sm: `py-2 px-2`,
}

const buttonColors = {
  light: `bg-camel hover:bg-blue hover:text-slate`,
  dark: `bg-black hover:bg-slate`,
  transparent: `border-2 border-solid border-white hover:bg-camel hover:text-white`
}

const Button = ({ children, size, buttonColor }) => {
  return (
    <button className={`
      ${sizes[size] || sizes.default}
      ${buttonColors[buttonColor] || buttonColors.light}
      rounded text-white italic font-serif
    `}>
      { children }
    </button>
  )
}

export default Button