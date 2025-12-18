import React from 'react'

const Button = ({title,css}) => {
  return (
    <div className={`px-5.25 py-2.75 ${css} rounded-[50px] flex justify-center items-center`}>
      <button>{title}</button>
    </div>
  )
}

export default Button
