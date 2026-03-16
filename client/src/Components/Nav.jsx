import React from 'react'
import { useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const [isOpen , setIsOpen] = useState(false)
  return (
    <div>
        {/* //desktop */}
        <div className='hidden md:flex justify-between px-20 py-4 text-gray-800  bg-cyan-100'>
            <p>Logo</p>
            <div className='hidden md:flex gap-4 items-center'>
            <NavLink to={'/'} className={({isActive})=>isActive ? "bg-gray-700 text-white px-3 py-1 rounded" : "text-gray-800 p-2" }>
                Home
            </NavLink> 
            <NavLink to={'/posts'} className={({isActive})=>isActive ? "bg-gray-700 text-white px-3 py-1 rounded" : "text-gray-800 p-2" }>
                Posts
            </NavLink>
            <NavLink to={'/profile'} className={({isActive})=>isActive ? "bg-gray-700 text-white px-3 py-1 rounded" : "text-gray-800 p-2" }>
                Profile
            </NavLink>
            </div>

            <button>Login</button>
        </div>


        {/* //mobile */}
        <div className='md:hidden flex justify-between px-4 py-4  text-gray-800  bg-cyan-100'>
            <p>Logo</p>

            <div className='flex gap-4 items-center'>
                <button onClick={()=>setIsOpen(!isOpen)}><MenuIcon/></button>
                <button>Login</button>
            </div>
                
        </div>
        {
            isOpen &&
            <div className='flex md:hidden flex-col  py-5 items-start bg-gray-100 space-y-4 pl-4'>
            <NavLink to={'/'} className={({isActive})=>isActive ? "bg-gray-700 text-white px-3 py-1 rounded" : "text-gray-800 p-2" }>
                Home
            </NavLink>
            <NavLink to={'/posts'} className={({isActive})=>isActive ? "bg-gray-700 text-white px-3 py-1 rounded" : "text-gray-800 p-2" }>
                Posts
            </NavLink>
            <NavLink to={'/profile'} className={({isActive})=>isActive ? "bg-gray-700 text-white px-3 py-1 rounded" : "text-gray-800 p-2" }>
                Profile
            </NavLink>
            </div>
        }

    </div>
  )
}

export default Nav