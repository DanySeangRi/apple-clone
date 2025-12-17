import React from 'react'
import List from './List';
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
const Search = ({
    name,
    searchItem=[],
   
    
  }) => (
    // thirdTittle,thirdItem
    <div className="group  cursor-pointer">
         <List name={name} ></List>
        <div className="  
                            fixed top-9 left-1/2 -translate-x-1/2
                            min-h-61.5 w-[max(1440px,100%)]
                            bg-white text-black shadow-xl
                            z-50

                            opacity-0 translate-y-0
                            pointer-events-none

                            transition-all duration-300 ease-in-out

                            group-hover:opacity-100
                            group-hover:translate-y-3
                            group-hover:pointer-events-auto 
                       "
                        >

            <div className="flex mx-auto items-start   justify-start w-5xl px-5.5 pt-10 pb-21 ">

                <div className="flex flex-col  w-auto pr-22 text-[12px] item-center gap-2">
                  <div className='flex text-center gap-2 '>     
                            <CiSearch size={22}/>
                      <input type="Search" name="" id="" 
                      placeholder='Search apple.com '
                      className='text-[20px] focus:outline-none w-240'/>
                  </div>
                    
                  <div >

                        <p className="text-[#898989] mt-4 font-medium mb-2">Quick Links</p> 
                        {searchItem.map((item)=>{
                          return <>
                            <span className='flex items-center gap-3   hover:bg-[#b7b7b71e] '>
                                <FaArrowRightLong className='text-[grey]'/>
                                  <p
                                        key={item}
                                        className="text-[#2c2c2d] cursor-pointer  mt-1 font-medium w-240 "
                                    >
                                        {item}
                                    </p>
                            </span>
                        </>
                        })}

                   </div>
                </div>
            </div>
        </div>
    </div>
);

export default Search
