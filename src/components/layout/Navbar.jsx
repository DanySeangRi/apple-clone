import React from 'react'
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GrShop } from "react-icons/gr";
import './navabr.css'
import Dropdown from '../common/Dropdown';
const Navbar = () => {
  return (
    <nav className=' h-12  w-full justify-center items-center bg-[#f5f5f7cc] '>
      <ul className='flex items-center justify-center gap-3.5  mx-[208px] h-12 px-5.5  '>
        <FaApple size={20} />
        <Dropdown name="Store" items={['Mac', 'iPad', 'iPhone']} a={['Shop Gift','Mac','IPad']} />
        <Dropdown name="iPad" items={['Explore', 'Target', 'Hello']} />
        <Dropdown name="iPhone" items={['Explore', 'Target', 'Hello']} />
        <Dropdown name="Watch" items={['Explore', 'Target', 'Hello']} />
        <Dropdown name="Vision" items={['Explore', 'Target', 'Hello']} />
        <Dropdown name="Airpods" items={['Explore', 'Target', 'Hello']} />
        <Dropdown name="TV & Home" items={['Explore', 'Target', 'Hello']} />
        <Dropdown name="Entertainment" items={['Explore', 'Target', 'Hello']} />
        <Dropdown name="Accessories" items={['Explore', 'Target', 'Hello']} />
        <Dropdown name="Support" items={['Explore', 'Target', 'Hello']}  />
        <CiSearch size={20} />
        < GrShop size={20} />

      </ul>
      <div className='navbar-element__list '>

      </div>
   
    </nav>
  )
}

export default Navbar