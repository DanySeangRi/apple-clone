import React from 'react'
import Button from './Button'
const BigCard = ({ image,title,description ,btn1,btn2}) => {
  return (
    <div className='h-173 bg-cover bg-center flex items-center flex-col mb-3  ' style={{ backgroundImage: `url(${image})` }}>
      <h1 className='text-[48px] font-medium mt-10'>{title}</h1>
      <p className=' text-[#161616] font-light text-[25px]'>{description}</p>
     <div className='flex gap-5 mt-4 '>
      {btn1}
      {btn2}
     </div>
    </div>
  )
}

export default BigCard
