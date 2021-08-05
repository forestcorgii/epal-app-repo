import { useState } from "react";
import Modal from "../../../components/ModalComponents/ModalOrder";
import Backdrop from "../../../components/ModalComponents/Backdrop";


function ModalCheckout({name,imageURL,price,...props}){
    function cancelHandler(){
        props.onCancel();
    }
    function checkoutHandler(){
        props.onCancel();
    }

    return(

         
    <div className='modal'>
<center>
    <p> CHECKOUT</p>    
    <hr/>
            <h3>{name}</h3>
            <br />
            <img src={imageURL}/><br/>
           
            <p>{ price}</p>
    
    <button className='order-btn-btn' onClick={cancelHandler}> Cancel</button> 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className='order-btn-btn' onClick={checkoutHandler}>Checkout</button>
    </center>
</div>

    )
}

export default ModalCheckout;