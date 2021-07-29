import SocksBlack from "../Seller/imagesProducts/socks black.jpeg";
// import ShoesBlack from "./imagesProducts/shoes black.jpeg";
// import SocksNude from "./imagesProducts/socks nude.jpeg";
// import TshirtBlack from "./imagesProducts/tshirt black.jpeg";
// import WatchBlack from "./imagesProducts/watch black.jpeg";
// import Brownies from "./imagesProducts/brownies1.jpeg";
// import M1 from "./imagesProducts/marijuana1.jpeg";
// import M2 from "./imagesProducts/marijuana2.jpeg";
// import M3 from "./imagesProducts/marijuana3.jpeg";
// import "./Products.css";
import ProductsBL from "./ProductsBL";

function Products() {
	const { user, getProducts, loading, error } = ProductsBL();
	console.log(getProducts);
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
			{/* <center> */}
				<img src={image} alt={name} height="200px" width="130px;"></img>
				<br />
				<span className="product-name">{name}</span>
				<br />
				<span className="price">₱{price}</span>
			{/* </center> */}
		</div>
	);
}

// <div className="SellerPage-whole-page">
// 			<section>
// 				<center>
// 					{" "}
// 					<h1>Seller Page</h1>{" "}
// 				</center>
// 				{loading ? <div>Loading...</div> : null}
// 				{error ? <div>Error!!</div> : null}
// 				{data ? (
// 					<div className="SellerPage">

// 						{/* THIS PLAY PRODUCTS HERE! HAHAHA */}

// 						<div className="seller-product-display">
// 							<center>
// 								<div className="layer">
// 									<div className="catalog-product">
// 										<img
// 											src={SocksBlack}
// 											alt="Brownies"
// 											height="200px"
// 											width="130px;"
// 										></img>
// 										<br />
// 										<span className="product-name">Black Socks</span>
// 										<br />
// 										<span className="price">₱100.00</span>
// 									</div>
// 									<div className="catalog-product">
// 										<img
// 											src={SocksNude}
// 											alt="Brownies"
// 											height="200px"
// 											width="130px;"
// 										></img>
// 										<br />
// 										<span className="product-name">Brown Socks</span>
// 										<br />
// 										<span className="price">₱100.00</span>
// 									</div>
// 									<div className="catalog-product">
// 										<img
// 											src={M2}
// 											alt="marijuana2"
// 											height="200px"
// 											width="150px;"
// 										></img>
// 										<br />
// 										<span className="product-name">Green1</span>
// 										<br />
// 										<span className="price">₱100.00</span>
// 									</div>
// 								</div>
// 								<div className="layer">
// 									<div className="catalog-product">
// 										<img
// 											src={WatchBlack}
// 											alt="Brownies"
// 											height="200px"
// 											width="200px;"
// 										></img>
// 										<br />
// 										<span className="product-name">Black Watch</span>
// 										<br />
// 										<span className="price">₱100.00</span>
// 									</div>
// 									<div className="catalog-product">
// 										<img
// 											src={ShoesBlack}
// 											alt="Brownies"
// 											height="200px"
// 											width="250px;"
// 										></img>
// 										<br />
// 										<span className="product-name">Black Shoes</span>
// 										<br />
// 										<span className="price">₱100.00</span>
// 									</div>
// 									<div className="catalog-product">
// 										<img
// 											src={Brownies}
// 											alt="Brownies"
// 											height="200px"
// 											width="250px;"
// 										></img>
// 										<br />
// 										<span className="product-name">Brownies</span>
// 										<br />
// 										<span className="price">₱100.00</span>
// 									</div>
// 								</div>
// 								<div className="layer">
// 									<div className="catalog-product">
// 										<img
// 											src={M1}
// 											alt="marijuana1"
// 											height="200px"
// 											width="250px;"
// 										></img>
// 										<br />
// 										<span className="product-name">Green2</span>
// 										<br />
// 										<span className="price">₱100.00</span>
// 									</div>

// 									<div className="catalog-product">
// 										<img
// 											src={TshirtBlack}
// 											alt="Brownies"
// 											height="200px"
// 											width="250px;"
// 										></img>
// 										<br />
// 										<span className="product-name">Black Tshirt</span>
// 										<br />
// 										<span className="price">₱100.00</span>
// 									</div>
// 									<div className="catalog-product">
// 										<img
// 											src={M3}
// 											alt="marijuana3"
// 											height="200px"
// 											width="250px;"
// 										></img>
// 										<br />
// 										<span className="product-name">Green3</span>
// 										<br />
// 										<span className="price">₱100.00</span>
// 									</div>
// 								</div>
// 							</center>
// 						</div>
// 					</div>
// 				) : null}

export default Products;
