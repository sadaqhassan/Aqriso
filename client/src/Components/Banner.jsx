import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-8 bg-gray-100 p-5 rounded-2xl  shadow-xl items-start'>
        <img src="/Reading.png" className='w-20 h-20 rounded-full' alt="" />
        <div className='flex flex-col items-start  rounded-full'>
            <h1 className='text-medium font-bold'>Sadak hassan Ahmed</h1>
            <p>Lorem ipsum dolor sit.lorem- Lorem ipsum dolor sit.</p>
        </div>
    </div>
  )
}

export default Banner