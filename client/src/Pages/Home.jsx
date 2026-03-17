import React from 'react'
import Banner from '../Components/Banner'
import Posts from './Posts'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Banner/>
      <Posts/>
    </div>
  )
}

export default Home