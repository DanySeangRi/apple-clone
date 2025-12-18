import React from 'react'

const Button = ({title,background}) => {
  return (
    <div className={`px-5.25 py-2.75 w-33.7 h-11  ${background} rounded-[50px] text-center `}>

      {title}
    </div>
  )
}

export default Button
