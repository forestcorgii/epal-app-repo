import ProductsBL from "./ProductsBL";
import "../../../assets/css/buyer.css";
import { useState } from "react";
import Modal from "../../../components/ModalComponents/ModalOrder";
import Backdrop from "../../../components/ModalComponents/Backdrop";
// import { Dropdown } from 'semantic-ui-react'
function Products() {
	const { data, loading, error } = ProductsBL();

	return (
		<div className="product-layout">
			{/* <div class="dropdown">
				<button class="dropbtn">Categories</button>
				<div class="dropdown-content">
					<a href="#">Clothes</a>
					<a href="#">Shoes</a>
					<a href="#">Accesories</a>
					<a href="#">Fruits</a>
					<a href="#">Vegetables</a>
				</div>
			</div> */}

			<div className="product-display">
			
				{loading ? <div> &nbsp;&nbsp;&nbsp; Searching for products near your place...please wait</div> : null}
				
				{error ? <div>&nbsp;&nbsp;&nbsp; Sorry, no products.</div> : null}

				{data && data.availableProductList.length > 0 ?
					data.availableProductList.map((item) => {
						return (
							<ProductItem
								key={item._id}
								imageURL={item.imageURL}
								name={item.name}
								price={item.price}
							/>
						);
					}) : <div>Sorry, there is no available items in your area...</div>}
			</div>
		</div>
	);
}

function ProductItem({ imageURL, name, price, order }) {
	return (
		<div className="product">
			{/* <center> */}
			<img src={imageURL} alt={name} height="150px" width="190px;"></img>
			<br />
			<span className="product-name">{name}</span>
			<br />
			<span className="price">₱{price}</span>

			{/* <div className="order"> */}
				<Todo {...{ name, price, imageURL }} />
			{/* </div> */}

			{/* </center> */}
		</div>
	);
}

function Todo(props) {
	const [modalIsOpen, setModalIsOpen] = useState(false); //modal should not be opened first so false

	function deleteHandler() {
		setModalIsOpen(true);
		// console.log('Clicked!');
		// console.log(props.text);
	}
	function closeModalHandler() {
		setModalIsOpen(false);
	}

	return (
		<div className="order-btn">
			<h2>{props.text}</h2>
			<div className="order-actions">
				<button className="order-btn-btn" onClick={deleteHandler}>
				<span class="material-icons">info</span>
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

export default Products;
