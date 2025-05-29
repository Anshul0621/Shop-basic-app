import React, { useContext } from 'react'
import Routex from './utils/Routex'
import { Link,Routes } from 'react-router-dom'
import { usercontext } from './utils/Context'
import { Toaster } from 'react-hot-toast'

const App = () => {
  
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Routex></Routex>
    </div>
  )
}

export default App
