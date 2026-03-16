import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-cyan-100'>

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App