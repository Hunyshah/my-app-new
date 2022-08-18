import { useRef } from "react";
const Form=(props)=>{
    const amountRef =useRef();
    const submithandler =(e)=>{
     e.preventDefault();
     const enterdamount =amountRef.current.value;
     const intgnumber = +enterdamount
    
     props.onsavedata(intgnumber);
     console.log(intgnumber);
 
    //  yha sy amount ref k zariye value input sy amount ke get
      
    // kr k next mealitem component main pass kr de gyi 


    }
    return(
        <>
       <form onSubmit={submithandler}>
        
            <input ref={amountRef} type="number"  />
            <button>add</button>
        </form>
        </>
    )
}
export default Form;