import React from 'react'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar'
import Form from './Form'

const Home = () => {
  return (
    <div className='relative'>
      <Form />
    <div className='flex overflow-hidden'>
      <div className="sidebar bg-stone-50 h-screen w-[15vw] py-5 px-1">
        <Sidebar />
      </div>
      <div className="mainbar h-screen bg-[#Ffff] w-[85vw] py-17 px-10 overflow-y-scroll ">
      <Mainbar />
      </div>
    </div>
    </div>

  )
}

export default Home
