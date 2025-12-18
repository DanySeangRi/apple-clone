import React from 'react'
import BigCard from '../common/BigCard'
import { imageHome } from '../layout/data.js'
const Main = () => {
  return (
    <div className=''>
      <div className=' block text-center h-[44.6px] items-center justify-center text-sm'>
        <p className='p-3'>Order by 12/22 for free delivery of in‑stock items by 12/24. See checkout for specific delivery dates and options. Shop</p>
     </div>
      <BigCard image={imageHome[0].image}/>
       <BigCard image={imageHome[1].image}/>
       <BigCard image={imageHome[2].image}/>
    </div>
    
  )
}

export default Main