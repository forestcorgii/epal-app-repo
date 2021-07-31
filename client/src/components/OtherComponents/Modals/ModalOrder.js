function ModalOrder(props){
    function cancelHandler(){
        props.onCancel();
    }
    function checkoutHandler(){
        props.onCancel();
    }

    return(

         
    <div className='modal'>

    <p>ORDER</p>
    *Item's picture here<br/>
    *Item's price
    <br/><br/>
    Quantity: &nbsp; <input type="text" placeholder="Enter Quantity"/>
    <br/> <br/>
    Mode of Payment:<br/>
    1 <input type="radio" name="payment1"/><br/>
    2 <input type="radio" name="payment1"/>
    <br/> <br/> <br/> <br/>
    
    <button className='order-btn-btn' onClick={cancelHandler}> Cancel</button>
    <button className='order-btn-btn' onClick={checkoutHandler}>Checkout</button>
</div>
    
    // <div className='order'>
    //      <div>
    //         {/* display item's picture here */}
    //         {/* display item's picture here */} 
            
    //         Quantity: <input type="text" placeholder="Enter Quantity"/><br/>
    //         Mode of payment: <input type="radio" placeholder="Payment1">Payment1</input>
    //         <input type="radio" placeholder="Payment2">Payment2</input>
               


    //     </div>
    //     <button className='btn btn--alt' onClick={cancelHandler}> Cancel</button>
    //     <button className='btn' onClick={confirmHandler}>Confirm</button>
    // </div>
    )
}

export default ModalOrder;