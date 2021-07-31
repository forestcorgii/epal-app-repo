import SocksBlack from "../Seller/imagesProducts/socks black.jpeg";

import ProductsBL from "./ProductsBL";
import "../../assets/css/buyer.css";
import {useState} from 'react';
import Modal from '../../components/OtherComponents/Modals/ModalOrder';
import Backdrop from '../../components/OtherComponents/Backdrop';
// import { Dropdown } from 'semantic-ui-react'
function Products() {
	const { user, getProducts, loading, error } = ProductsBL();
	console.log(getProducts);

	return (
		<div className="product-layout">
				<div class="dropdown">
					<button class="dropbtn">Categories</button>
					<div class="dropdown-content">
					<a href="#">Clothes</a>
					<a href="#">Shoes</a>
					<a href="#">Accesories</a>
					<a href="#">Fruits</a>
					<a href="#">Vegetables</a>
					</div>
				</div>
			

			<div className="product-display">
				{loading ? <div>Loading Products...</div> : null}
				{error ? <div>Error!! Products...</div> : null}
				{getProducts &&
					getProducts.getProducts.map((item) => {
						return (
							<ProductItem
								key={item.id}
								image={item.imageURL}
								name={item.name}
								price={item.price}

							/>
							
						);
					})}
			</div>
		</div>
	);
}

function ProductItem({ image, name, price, order }) {
	return (
		<div className="product">
			{/* <center> */}
				<img src={image} alt={name} height="150px" width="160px;"></img>
				<br />
				<span className="product-name">{name}</span>
				<br />
				<span className="price">₱{price}</span>

				<div className="order">
					<Todo/>
					
				</div>

			{/* </center> */}
		</div>
	);
}

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false); //modal should not be opened first so false
    
    function deleteHandler(){
        setModalIsOpen(true);
        // console.log('Clicked!');
        // console.log(props.text);
    }   
function closeModalHandler(){
	setModalIsOpen(false);
}

    return(
       <div className='order'>
           <h2>{props.text}</h2>
           <div className='actions-order'>
               <button className='btn-order' onClick={deleteHandler}>Order</button>
           </div>
           {modalIsOpen && (
           <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
           )} 
           {modalIsOpen && <Backdrop onClick={closeModalHandler} />} 
           {/* shortcut, than to use the one below *
           **if modalIsOpen is true, we render Modal,else, we dont output anything (null) HAKDOG */}
      
       </div>
    );
}

export default Products;
