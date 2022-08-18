import { useContext } from "react";
import Cartcontext from "../store/cartcontext";
const CartData=(props)=>{
    const ctx = useContext(Cartcontext);
    const totalamu=ctx.totalamount
const realctx = ctx.items.map((item)=>(
    <div><h1>{item.name}</h1> 
     <h2>{item.price}</h2></div>
   
 
))
return(<>
    <div>
    {realctx}
    <h2>{totalamu}</h2>
    <button>add</button>
    <button onClick={props.onsavedata}>close</button>
    </div>
    </>)
}
export default CartData;