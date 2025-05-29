import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../comps/Home'
import Sidebar from '../comps/Sidebar'
import Details from '../comps/Details'
import Form from '../comps/Form'
import Editcard from '../comps/Editcard'

const Routex = () => {
  return (
    <div>
        <Routes>
            {/* <Route path='/' element={<Sidebar />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details/>} />
            <Route path='/editcard' element={<Editcard />}></Route>
        </Routes>
      
    </div>
  )
}

export default Routex

