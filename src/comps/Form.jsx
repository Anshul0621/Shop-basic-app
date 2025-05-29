import React, { useContext } from "react";
import { usercontext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

const Form = () => {
  const {
    formpopup,
    saveprev,
    prodcuts,
    isactive,
    setproducts,
    setallproducts,
    setdeleted,
  } = useContext(usercontext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const newdata = async (data) => {
    try{
      const resp = await axios.post('https://fakestoreapi.com/products',data)
      const saveddata= resp.data

      setdeleted((prev) => prev.filter((id) => id !== data.id)); 
      setallproducts((prev) => [...prev, saveddata]); 
      setproducts((prev) => [...prev, saveddata]);
        reset()
        saveprev()
      formpopup();
      toast.success("Product added successfully!", { duration: 1500 });
    }catch{
      toast.error('Product havent been added due to Eror')

    }
  };

  return (
    <div
      className={`fixed ${
        isactive ? "hidden" : ""
      } flex items-center justify-center inset-0 backdrop-blur-xs bg-black/10 z-50 `}
    >
      <div className="h-[80vh] w-[80vw] bg-stone-200 shadow-2xl inset-shadow-sm p-5 flex items-center justify-center">
        <div className="wrappercont w-full h-full flex items-center justify-center flex-col relative">
          <button
            onClick={formpopup}
            className="cursor-pointer absolute top-10 text-[1.5vw] right-10 bg-blue-600 border border-blue-600 px-4 py-1 rounded-lg"
          >
            Back
          </button>

          <form
            onSubmit={handleSubmit(newdata)}
            className="flex flex-col gap-2 w-[50vw]"
          >
            <h1 className="text-[1.1vw] text-red-600">
              Every Field is Neccesary
            </h1>
            <input
              className="border focus:outline-none focus:border-pink-300 rounded-md w-full p-1 border-blue-400"
              {...register("title", { required: true })}
              type="text"
              placeholder="Title"
            />
            <input
              className="border focus:outline-none focus:border-pink-300 rounded-md w-full p-1 border-blue-400"
              {...register("category", { required: true })}
              type="text"
              placeholder="Category"
            />
            <input
              className="border focus:outline-none focus:border-pink-300 rounded-md w-full p-1 border-blue-400"
              {...register("price", { required: true })}
              type="number"
              placeholder="Price"
            />
            <input
              className="border focus:outline-none focus:border-pink-300 rounded-md w-full p-1 border-blue-400"
              {...register("description", { required: true })}
              type="text"
              placeholder="description"
            />
            <input
              className="border focus:outline-none focus:border-pink-300 rounded-md w-full p-1 border-blue-400"
              {...register("id", { required: true })}
              type="number"
              placeholder="ID"
            />
            {/* <input className="border rounded-md w-full p-1 border-blue-400" {...register('rating')} type="text" placeholder="Ratings.. Ex-rate:4.9,count:70" /> */}
            <input
              className="border focus:outline-none focus:border-pink-300 rounded-md w-full p-1 border-blue-400"
              {...register("image", { required: true })}
              type="url"
              placeholder="Image URL"
            />
            <input type="submit" className="bg-blue-600 rounded-lg px-4 py-1" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
