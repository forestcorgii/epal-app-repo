import "../../../assets/css/seller.css";

import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
import BL from "./bl";
function Inventory() {
	const { product, handleClick } = BL();
	return (
		<div className="inventory">
			<br />
			<ProductList handleClick={handleClick} />
			<AddProductForm  />
		</div>
	);
}

export default Inventory;
