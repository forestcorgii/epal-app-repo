import BL from "./bl";
export default function AddProductForm() {
	const { data, loading } = BL();
	return (
		<div className="table-items">
			{/* ADD ANOTHER CELL FOR ITEM IMAGE */}
			<table>
				<tr>
					<th>ItemNo.</th>
					<th>Item Name</th>
					<th>Item Description</th>
					<th>Price</th>
					<th>Quantity</th>
				</tr>
				{loading ? (
					<div>Loading, please wait.</div>
				) : (
					data.getProducts &&
					data.getProducts.map((item, i) => (
						<Item
							id={item.id}
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

function Item({ id, name, description, price, quantity }) {
	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{description}</td>
			<td>{price}</td>
			<td>{quantity}</td>
		</tr>
	);
}
