import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const usercontext = createContext();

const Context = (props) => {
  const [products, setproducts] = useState([]);
  const [allproducts, setallproducts] = useState([]);
  const [selectedcard,setselectedcard] = useState([]);
  const [deleted,setdeleted] = useState([]);
  const [isactive,setisactive] = useState(true)
  const [addeddata,setaddeddata] = useState([])
  const [history,sethistory] = useState(null)
  const formpopup = ()=>{
    setisactive(!isactive)
  }
  
const saveprev = ()=>{
  sethistory(products)
}
  function getdata() {
    const api = "https://fakestoreapi.com/products";

    const storedproducts = localStorage.getItem('products')
    

    if(storedproducts){
      const parsedproducts = JSON.parse(storedproducts)
      setproducts(parsedproducts)
      setallproducts(parsedproducts)
    }
    else{

      
      axios
      .get(api)
      .then((res) =>{
        setproducts(res.data)
        setallproducts(res.data)
        localStorage.setItem("products", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
    }
    }
    useEffect(() => {

  if (products.length > 0) {
    localStorage.setItem("products", JSON.stringify(products));
  }
}, [products]);

const undo = ()=>{
  if(history){
    setallproducts(history)
    setproducts(history)
    sethistory(null)
  }
}
useEffect(() => {
  if (history) {
    localStorage.setItem("history", JSON.stringify(history));
  } else {
    localStorage.removeItem("history");
  }
}, [history]);

    
  useEffect(() => {
    getdata();
    const storeddata= localStorage.getItem('history')
    if(storeddata) sethistory(JSON.parse(storeddata))
  }, []);
const reset=()=>{
  localStorage.clear()
  setproducts([])
  setallproducts([])
  sethistory(null)
  getdata()
}
  return (
    <div>
      <usercontext.Provider value={{reset,saveprev,undo,addeddata,setaddeddata,formpopup,isactive, deleted,setdeleted,products,setproducts,allproducts,setallproducts,selectedcard,setselectedcard}}>{props.children} </usercontext.Provider>
    </div>
  );
};

export default Context;
