"use client"

import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white/30 backdrop-blur-sm flex py-4 flex-wrap justify-around shadow-md'>
        <h1 className='font-semibold text-lg'>To Do App</h1>
        <ul className='flex gap-[50px]'>
            <li>Home </li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>    
      
    </div>
  )
}

export default Navbar
