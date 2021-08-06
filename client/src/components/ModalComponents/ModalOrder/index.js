import Modal from "../../../components/ModalComponents/ModalCheckout/index";
import Backdrop from "../../../components/ModalComponents/Backdrop";
import { useState } from "react";
function ModalOrder({name,imageURL,price,...props}){
    const [modalIsOpen, setModalIsOpen] = useState(false); 
  
    function cancelHandler(){
        props.onCancel();
    }
    function checkoutHandler(){
        props.onConfirm();
    }
 


    return(

         
    <div className='modal-order'>
        <center>
        <p>ORDER</p>    
        <hr/>
                <h3>{name}</h3>
                <br />
                <img src={imageURL} height="100px" width="130"/><br/>
            
                <p>{ price}</p>
        <br/><br/>
        Quantity: &nbsp; <input type="number" placeholder="Enter Quantity"/>
        <br/> <br/>
   
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </center>

        <br/> <br/>
        <Checkout/>
        
        <button className='order-btn-btn' onClick={cancelHandler}> Close</button> 
    </div>
    )
}

function Checkout(props) {
	const [modalIsOpen, setModalIsOpen] = useState(false); //modal should not be opened first so false

	function deleteHandler() {
		setModalIsOpen(true);
	}
	function closeModalHandler() {
		setModalIsOpen(false);
	}


    return (
		<div className="order-btn">
			<h2>{props.text}</h2>
			<div className="order-actions">
			Checkout &nbsp;
				<button className="order-btn-btn" onClick={deleteHandler}>
				<span class="material-icons">add_shopping_cart</span>
				</button>
			</div>
			{modalIsOpen && (
				<Modal {...props} onCancel={closeModalHandler} onConfirm={closeModalHandler} />
			)}
			{modalIsOpen && <Backdrop onClick={closeModalHandler} />}
			{/* shortcut, than to use the one below */}
			{/* {modalIsOpen ? <Modal/> : null}
			 **if modalIsOpen is true, we render Modal,else, we dont output anything (null) */}
		</div>
	);

}

export default ModalOrder;