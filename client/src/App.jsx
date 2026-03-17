import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Posts from './Pages/Posts'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <div>

      <Nav/>
      <div className='px-5 md:px-20 pt-5'>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App