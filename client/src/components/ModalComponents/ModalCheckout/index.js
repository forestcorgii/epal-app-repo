

function ModalCheckout({name,imageURL,price,...props}){
    function cancelHandler(){
        props.onCancel();
    }
    function doneHandler(){
        props.onCancel();
    }

    return(

         
    <div className='modal-checkout'>
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
    <button className='order-btn-btn' onClick={doneHandler}>Done</button>
    </center>
</div>

    )
}

export default ModalCheckout;