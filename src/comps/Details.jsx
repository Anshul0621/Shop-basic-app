import React, { useContext } from "react";
import { usercontext } from "../utils/Context";
import { Link } from "react-router-dom";

const Details = () => {
  const {allproducts,setallproducts, products,saveprev,setproducts, selectedcard,deleted,setdeleted } = useContext(usercontext);
  const v = selectedcard;
  const deletefunc = (id)=>{

    saveprev()
    setdeleted(p=>[...p,id]);

    setproducts(prev=>prev.filter(pa=>pa.id !== id))
  }

  

  return (
    <div className=" w-[80%] m-auto h-screen flex items-center justify-center">
      <div className="wrapper relative w-[80%] h-[70%] flex gap-3 items-center">
        <div className="image w-[40%] h-[80%]">
          <img
            className="w-full h-full object-contain"
            src={v.image}
            alt=""
          />
        </div>
        <div className="conten w-[50%]  h-[35%]">
            <h1 className="font-semibold  text-[2vw] leading-none w-[90%]">{v.title}</h1>
            <h2 className="text-[1vw] text-stone-400 my-2">{v.category}</h2>
            <h2 className="text-pink-300 text-[1vw]">${v.price}</h2>
            <p className="leading-none text-[0.9vw] mt-3 mb-3">{v.description}</p>
            <Link to={'/editcard'} className="mt-3 cursor-pointer mx-4 text-blue-300 border border-blue-300 py-1 px-4 text-[1vw] rounded-md ">Edit</Link>
            <Link onClick={()=>deletefunc(v.id)} to={'/'} className="mt-3 text-red-300 border border-red-300 py-1 px-4 text-[1vw] rounded-md ">Delete</Link>

        </div>
            <Link to={'/'} className="absolute top-[-10%] left-[-20%] border px-4 py-1 rounded-md text-red-500 border-red-500">Back</Link>
      </div>
    </div>
  );
};

export default Details;
