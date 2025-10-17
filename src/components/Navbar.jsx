import React, { useState } from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import { ImUserTie } from "react-icons/im";
import { useEffect } from 'react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white text-black shadow-md py-4" : "bg-transparent py-6"}
      px-24 flex justify-between items-center`}>
      <div className="text-2xl font-bold text-gray-800">Foodyy</div>

      <div>
        <ul  className="flex space-x-5 text-lg font-semibold uppercase">
          <li className='cursor-pointer hover:text-gray-600 transition'>Home</li>
          <li className='cursor-pointer hover:text-gray-600 transition'>Dishes</li>
          <li className='cursor-pointer hover:text-gray-600 transition'>Contact</li>
          <li className='cursor-pointer hover:text-gray-600 transition'>Use App</li>
        </ul>
      </div>
      <div className='flex items-center space-x-6 text-amber-600'>
        <RiShoppingCart2Line className='text-3xl cursor-pointer'/>
        <ImUserTie className='text-3xl cursor-pointer'/> 
      </div>
    </div>
  )
}

export default Navbar