import React, { useContext, useState } from 'react'
import { usercontext } from '../utils/Context'
import './App.css'
import { Link } from 'react-router-dom'

const Mainbar = () => {
    const {undo,allproducts,setallproducts,products,setproducts,setselectedcard,selectedcard} = useContext(usercontext)
    

        const detailsfunc = (id)=>{
            const newcard = products.find(p=>p.id === id)
            setselectedcard(newcard)
        }
  return (
      <div className='flex flex-wrap gap-3 pb-10 relative'>
        
        {products.map((v,i)=>{
            return <Link to={'/details'} onClick={()=>detailsfunc(v.id)} key={i} className='inset-shadow-xs w-45 h-56 rounded-lg shadow overflow-hidden hover:scale-102'>
            <div className="image w-[80%] m-auto h-[70%] pt-2">
                <img className='w-full h-full object-contain ' src={v.image} alt="" />
            </div>
            <div className="content text-[1vw] px-2 line-clamp-1">{v.title}</div>
            <div className="content text-[1.2vw] px-2 line-clamp-1 bg-stone-600 text-white py-[2px] w-fit rounded-lg px-1 mx-2">${v.price}</div>
        </Link>
        })}
    </div>
  )
}

export default Mainbar
