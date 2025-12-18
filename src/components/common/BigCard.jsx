import React from 'react'
import Button from './Button'
const BigCard = ({ image,title,description }) => {
  return (
    <div className='h-173 bg-cover bg-center flex items-center flex-col mb-3  ' style={{ backgroundImage: `url(${image})` }}>
      <h1 className='text-[48px] font-medium mt-10'>{title}</h1>
      <p className=' text-[#161616] font-light text-[25px]'>{description}</p>
     <div className='flex gap-5 mt-4'>
      <Button title ='Learn More ' background='bg-[#0071e3] text-white'/>
      <Button title ='Shop iPhone' background='bg-transparent border border-[#0071e3] text-[#0071e3]'/>
     </div>
    </div>
  )
}

export default BigCard
