import Cartcontext from "./cartcontext";
import { useReducer } from "react";

const initialstate ={
    items:[],
    totalamount:0
}
const cartreducer=(state,action)=>{
    if (action.type==='ADD'){
        const updateitems = state.items.concat(action.item);
        const updatetotalamount = state.totalamount +action.item.price * action.item.amount;
       console.log(action.item)
       console.log(action.item.amount)
        return {
            items:updateitems,
            totalamount:updatetotalamount
        }

    }
return initialstate
}
const CartProvider =(props)=>{
    
    const[cartstate,dispatchCart]=useReducer(cartreducer,initialstate)

    const additemhandler=(item)=>{
        dispatchCart({type:'ADD',item:item})
       
    };
    const removehandler=(id)=>{
        dispatchCart({type:'REMOVE',id:id})
    };
    const context ={
        items:cartstate.items,
        totalamount:cartstate.totalamount,
        additem:additemhandler ,
        removeitem:removehandler
    }
    return(<>
    <Cartcontext.Provider value={context}>
        {props.children}
    </Cartcontext.Provider>
    </>)
}
export default CartProvider