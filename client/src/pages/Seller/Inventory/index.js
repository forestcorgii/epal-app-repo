import "../../../assets/css/seller.css";

import ProductList from './ProductList'
import AddProductForm from './AddProductForm'
function Inventory() {
	
	return (
		<div className="inventory">
			<br />
			<ProductList/>
			<AddProductForm/>
		</div>
	);
}

export default Inventory;
