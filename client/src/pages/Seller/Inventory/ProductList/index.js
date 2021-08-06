import BL from "./bl";
export default function AddProductForm(props) {
	const { data, loading } = BL();
	return (
		<div className="table-items">
			{/* ADD ANOTHER CELL FOR ITEM IMAGE */}
			<table>
				<tr>
					<th>Image</th>
					<th>ItemNo.</th>
					<th>Item Name</th>
					<th>Item Description</th>
					<th>Price</th>
					<th>Quantity</th>
				</tr>
				{loading ? (
					<div>Loading, please wait.</div>
				) : (
					data.sellerProductList &&
					data.sellerProductList.map((item, i) => (
						<Item
							key={"productlist" + item._id}
							onClick={props.handleClick(item)}
							imageURL={item.imageURL}
							id={item._id}
							name={item.name}
							description={item.description}
							price={item.price}
							quantity={item.quantity}
						/>
					))
				)}
			</table>
		</div>
	);
}

function Item({imageURL, id, name, description, price, quantity, onClick }) {
	return (
		<tr>
			<td><img src={ imageURL} width="80"/></td>
			<td onClick={() => onClick}>{id}</td>
			<td>{name}</td>
			<td>{description}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			{/* <td>
			</td> */}
		</tr>
	);
}
