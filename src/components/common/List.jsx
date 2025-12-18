import React from 'react'
import { NavLink } from 'react-router-dom'

const List = ({ name, to  }) => {
  return (
    <nav>
      <NavLink to={to} className='px-2 '>
       <div className='text-[12px] flex items-center justify-center '> {name}</div>
      </NavLink>
    </nav>
  )
}

export default List