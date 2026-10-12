import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode
  handleMenuButton: (value: string) => void
  value: string
  menu: string
}

//active button style: bg-[#23472C] text-[#FFFDF8]

function Button({children, handleMenuButton, value, menu}: ButtonProps) {
  return (
    <button className={`border border-[#23472C] text-[#23472C] rounded-4xl  px-8 py-2 text-base text-center ${menu === value ? 'bg-[#23472C] text-[#FFFDF8]': null}`} onClick={() => handleMenuButton(value)}>{children}</button>
  )
}

export default Button;