import React from 'react'
import BigCard from '../common/BigCard'
import { imageHome } from '../layout/data.js'
import { heroItem } from '../layout/data.js' 
import Button from '../common/Button.jsx' 
import { btnCss } from '../layout/data.js'  
const Main = () => {
  return (
    <div className=''>
      <div className=' block text-center h-[44.6px] items-center justify-center text-sm'>
        <p className='p-3'>Order by 12/22 for free delivery of in‑stock items by 12/24. See checkout for specific delivery dates and options. Shop</p>
     </div>
      <BigCard image={imageHome[0].image}   title={heroItem[0].title} 
      description={heroItem[0].description}
       btn1={<Button title ={btnCss[3].title} css={btnCss[3].css}/>}/>

       <BigCard image={imageHome[1].image}  title={heroItem[1].title}
        description={heroItem[1].description} 
       btn1={ <Button title ={btnCss[0].title} css={btnCss[0].css}/>} 
       btn2={<Button title ={btnCss[2].title} css={btnCss[2].css}/>}/>

       <BigCard image={imageHome[2].image} title={heroItem[2].title}
        description={heroItem[2].description} 
         btn1={ <Button title ={btnCss[0].title} css={btnCss[0].css}/>} 
         btn2={<Button title ={btnCss[1].title} css={btnCss[1].css}/>}/>
    </div>
    
  )
}

export default Main