import React, { useContext, useState } from 'react'
import { usercontext } from '../utils/Context'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  

  const {reset,products,setproducts,allproducts,deleted,undo,setdeleted,formpopup} = useContext(usercontext)
  const [cate,setcate] = useState('ALL')

  const uniquecategories = [ ...new Set(
    allproducts
    .filter(e => e && e.category  )
    .map(e=>e.category)
  )]

  const filterdata = (selectedcate)=>{
    setcate(selectedcate)
     
    const newoproducts = selectedcate === 'ALL'? allproducts: allproducts.filter(e=>e.category === selectedcate)

    const finaldata = newoproducts.filter(e=> !deleted.includes(e.id))

     setproducts(finaldata)
  }

  


  return (
    <div className='flex flex-col items-center'>
      <div className='border-b border-stone-300 p-4'>
      <Link to={'/'} onClick={formpopup} className='text-blue-400 border border-blue-400 p-2 text-[1vw] rounded-lg cursor-pointer hover:text-blue-500'>Add New Product</Link>
      </div>

      <div className="category w-[90%] py-3 ">
        <h1 className='font-medium'>Category Filter</h1>
        <div className='options flex flex-col pt-2 gap-2'>
          <div onClick={()=>filterdata('ALL')} className="butt flex gap-2 items-center cursor-pointer text-[1.2vw]"><div className={`w-3 h-3 bg-red-400 rounded-full m-1`}></div><h3>All</h3></div>
          {uniquecategories.map((v,i)=>(
            <div onClick={()=>filterdata(v)} key={i} className="butt flex gap-2 items-center cursor-pointer text-[1.2vw]"><div className={`w-3 h-3 rounded-full ${v==="men's clothing"?'bg-blue-600':'' } ${v==="jewelery"?'bg-amber-500':'bg-black' } ${v==="electronics"?'bg-black':'' } ${v==="women's clothing"?'bg-pink-500':'' }  m-1`}></div><h3>{v}</h3></div>
          ))}

          <button onClick={undo} className='cursor-pointer bg-red-600 px-4 py-1 rounded-full'>UNDO</button>
          <button onClick={reset} className='cursor-pointer bg-red-600 px-4 py-1 rounded-full'>Reset Data</button>
          
          
        </div>
      </div>

    </div>
  )
}

export default Sidebar
