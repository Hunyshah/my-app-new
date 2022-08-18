import Header from "./components/header";
import Mealitem from "./itemsmeal";
import CartData from "./components/cartData";
import { useState } from "react";
import CartProvider from "./store/cartprovider";
const dummydata =[
{'id':'e1', 'name':'honey','dis':'what should u want','price':214},

{'id':'e2','name':'bilal','dis':'what should u want','price':212},

{'id':'e3','name':'haider','dis':'what should u want','price':314},
];
 function App() {
  const[state,setstate]=useState(false)
const datalist = dummydata.map((item)=>  <Mealitem key={item.id} name={item.name} dis={item.dis} price={item.price}/>
)
console.log(datalist)
const showcarthandler =()=>{
  return setstate(true)
}
const hidecarthandler =()=>{
  return setstate(false)
}
  return (
    <CartProvider>   
       {state&& <CartData onsavedata={hidecarthandler}/>}
   {<Header onsavedata ={showcarthandler}/>}
    {datalist}
    </CartProvider>
  );
      };

export default App;
