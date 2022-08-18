import Form from "./components/form";
import {  useContext } from "react";
import Cartcontext from "./store/cartcontext";
const Mealitem =(props)=>{
const ctx = useContext(Cartcontext);
const additemhandler =(amount)=>{
    ctx.additem({
    name:props.name,
    dis:props.dis,
    price:props.price,
    amount:amount
    

    // yha additemhandler function main form component sy aya 
    // howa parameter  amount ko get kr liya gya 

    
    // orr context k add function main sb value pass kr de Gai
    // jo k usereducer k madad sy privider Component
    // main use kr k show kry gy 

   })
}

    return(<>
    <div>
        <ul>
            <li>
             {props.name}
             {props.dis}
             {props.price}
            </li>
        </ul>
        <div>
        <Form onsavedata={additemhandler}/>
        </div>
    </div>
    </>);
};
export default Mealitem;