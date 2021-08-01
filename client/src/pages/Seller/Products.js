import "./Products.css";
import ProductsBL from "./ProductsBL";

function Products() {
	const { user, getProducts, loading, error } = ProductsBL();
	console.log(getProducts)
	return (
		<div className="product-layout">
			<div class="dropdown">
					<button class="dropbtn">Categories</button>
					<div class="dropdown-content">
					<a href="#">Clothes</a>
					<a href="#">Shoes</a>
					<a href="#">Accesories</a>
					<a href="#">Fruits and Vegetables</a>
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

function ProductItem({ image, name, price }) {
	return (
		<div className="catalog-product">
			<center>
				<img src={image} alt={name} height="200px" width="130px;"></img>
				<br />
				<span className="product-name">{name}</span>
				<br />
				<span className="price">₱{price}</span>
			</center>
		</div>
	);
}

		

export default Products;
