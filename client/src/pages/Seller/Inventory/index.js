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
			<AddProductForm selectedProduct={product} />
		</div>
	);
}

export default Inventory;
