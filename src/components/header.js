import classes from '../components/header.module.css'
import { useContext } from 'react';
import Cartcontext from '../store/cartcontext';
const Header =(props)=>{
    const ctx=useContext(Cartcontext);
    const numbercartitem =ctx.items.reduce((cur,item)=>{
        return cur + item.amount;
    },0)
    return(<>
    <nav className={classes.navba}>
        <div>
            <h2 className={classes.logoname}>CompanyLogo</h2>
        </div>
        <div className={classes.cart}><span >{numbercartitem}</span><button onClick={props.onsavedata}>Cart</button></div>
    </nav>
    </>)
}
export default Header;

// yha pr item badge main array value add krny k liye yani length 
// ke jaga reduse ko use kiya jis main vale 
// syntax array.reduce(cur,item)=>{
//     return cur +item.amount
// }