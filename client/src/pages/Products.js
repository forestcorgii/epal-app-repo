import SocksBlack from "./imagesProducts/socks black.jpeg";
import ShoesBlack from "./imagesProducts/shoes black.jpeg";
import SocksNude from "./imagesProducts/socks nude.jpeg";
import TshirtBlack from "./imagesProducts/tshirt black.jpeg";
import WatchBlack from "./imagesProducts/watch black.jpeg";
import Brownies from "./imagesProducts/brownies1.jpeg";
import M1 from "./imagesProducts/marijuana1.jpeg";
import M2 from "./imagesProducts/marijuana2.jpeg";
import M3 from "./imagesProducts/marijuana3.jpeg";
import "./Products.css";

function Products() {
	return (
		<div className="product-layout">

            <div className="products-navigation">
                <h1>Products</h1>
				<nav>
					<ul>List</ul>
					<ul>Categories</ul>
					<ul>Color</ul>
				</nav>
			</div>

			<div className="product-display">
				<ProductItem image={SocksBlack} name="Black Socks" price="100.00" />
				<ProductItem image={SocksNude} name="Nude Socks" price="100.00" />
				<ProductItem image={M3} name="Mar 1" price="100.00" />
				<ProductItem image={ShoesBlack} name="Black Shoes" price="100.00" />
				<ProductItem image={M2} name="Mar 2" price="100.00" />
				<ProductItem image={TshirtBlack} name="Black T-shirt" price="100.00" />
				<ProductItem image={M1} name="Mar 1" price="100.00" />
				<ProductItem image={WatchBlack} name="Black Watch" price="100.00" />
				<ProductItem image={Brownies} name="Brownies" price="100.00" />
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
