import React from 'react'
import { useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const [isOpen , setIsOpen] = useState(false)
  return (
    <div>
        {/* //desktop */}
        <div className='hidden md:flex justify-between px-20 py-2 bg-blue-900'>
            <p>Logo</p>
            <div className='hidden md:flex gap-4 items-center'>
            <NavLink>
                Home
            </NavLink>
            <NavLink>
                Posts
            </NavLink>
            <NavLink>
                Profile
            </NavLink>
            </div>

            <button>Login</button>
        </div>


        {/* //mobile */}
        <div className='flex justify-between px-20 py-2 bg-blue-900'>
            <p>Logo</p>

            <div className='flex gap-4 items-center'>
                <button onClick={()=>setIsOpen(!isOpen)}><MenuIcon/></button>
                <button>Login</button>
            </div>
        </div>
        {
            isOpen &&
            <div className='flex md:hidden flex-col gap-4 items-start'>
            <NavLink>
                Home
            </NavLink>
            <NavLink>
                Posts
            </NavLink>
            <NavLink>
                Profile
            </NavLink>
            </div>
        }

    </div>
  )
}

export default Nav