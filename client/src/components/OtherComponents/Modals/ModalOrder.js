function ModalOrder(props){
    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onCancel();
    }

    return(
    
    <div className='modal-order'>
         <div>
            {/* display item's picture here */}
            {/* display item's picture here */} 
            
            Quantity: <input type="text" placeholder="Enter Quantity"/><br/>
            Mode of payment: <input type="radio" placeholder="Payment1">Payment1</input>
            <input type="radio" placeholder="Payment2">Payment2</input>
               


        </div>
        <button className='btn btn--alt' onClick={cancelHandler}> Cancel</button>
        <button className='btn' onClick={confirmHandler}>Confirm</button>
    </div>
    )
}

export default ModalOrder;