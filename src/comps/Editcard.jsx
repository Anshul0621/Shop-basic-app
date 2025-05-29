import React, { useContext, useEffect } from "react";
import { usercontext } from "../utils/Context";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

const Editcard = () => {
  const {
    formpopup,
    products,
    isactive,
    selectedcard,
    setselectedcard,
    setproducts,
    setallproducts,
    setdeleted,
    saveprev
  } = useContext(usercontext);
  const navigate = useNavigate()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

    

    const updation = ()=>{
      const cardid = selectedcard.id 

      const updatedprods = products.map(p=>{
        if(p.id===cardid){
          saveprev()
          return{
            ...p,
            title: selectedcard.title,
            price: selectedcard.price
          }
        }
        return p
      })
        setproducts(updatedprods)
        navigate(-2)

    }

  return (
    <div
      className={`fixed flex items-center justify-center inset-0 backdrop-blur-xs bg-black/10 z-50 `}
    >
      <div className="h-[80vh] w-[80vw] bg-stone-200 shadow-2xl inset-shadow-sm p-5 flex items-center justify-center">
        <div className="wrappercont w-full h-full flex items-center justify-center flex-col relative">
          <Link to={'/details'}
            className="cursor-pointer absolute top-10 left-10 bg-blue-600 border border-blue-600 px-4 py-1 rounded-lg"
          >
            Back
          </Link>

          <form
            onSubmit={handleSubmit(updation)}
            className="flex flex-col gap-2 w-[50vw]"
          >
            <h1 className="text-[1.1vw] text-red-600">
              Edit your card details here:
            </h1>
            <input
              className="border focus:outline-none focus:border-pink-300 rounded-md w-full p-1 border-blue-400"
              {...register("title")}
              value={selectedcard.title}
              onChange={e=>setselectedcard({...selectedcard,title:e.target.value})}
              type="text"
              placeholder="Title"
              />
            <input
              className="border focus:outline-none focus:border-pink-300 rounded-md w-full p-1 border-blue-400"
              {...register("price")}
              value={selectedcard.price}
              onChange={e=>setselectedcard({...selectedcard,price:e.target.value})}
              type="number"
              placeholder="Price"
            />
            
            <input type="submit" className="bg-blue-600 rounded-lg px-4 py-1" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editcard;
