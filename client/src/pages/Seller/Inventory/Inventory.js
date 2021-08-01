import "../../../assets/css/seller.css";

import BL from "./bl";
import Dropzone from "../../../components/UploadFileComponents/index";

function Inventory() {
	const { formik } = BL();
	return (
		<div className="inventory">
			<br />
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
					<tr>
						<td>JSSM12345</td>
						<td>Black Shoes</td>
						<td>Unique black shoes. Made in China</td>
						<td>1,200</td>
						<td>5</td>
					</tr>
					<tr>
						<td>JSSM12355</td>
						<td>Blue Shoes</td>
						<td>Color blue shoes made in Italy</td>
						<td>1,200</td>
						<td>7</td>
					</tr>
					<tr>
						<td>JSSM12365</td>
						<td>Black Shoes</td>
						<td>Unique black shoes. Made in China</td>
						<td>1,200</td>
						<td>5</td>
					</tr>
					<tr>
						<td>JSSM12375</td>
						<td>Black Shoes</td>
						<td>Unique black shoes. Made in China</td>
						<td>2,000</td>
						<td>5</td>
					</tr>
				</table>
			</div>
			<div className="side-nav">
				<p>Add new product here</p>
				{JSON.stringify(formik.errors)}
				<form onSubmit={formik.handleSubmit}>
					{/* <div className="inventory-input-details">
						<input
							type="text"
							name="id"
							placeholder="Enter ItemNo."
							onChange={formik.handleChange}
							value={formik.values.id}
						></input>
					</div> */}
					<div className="inventory-input-details">
						<input
							type="text"
							name="productName"
							placeholder="Enter Name"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.productName}
						></input>
					</div>
					<div className="inventory-input-details">
						<input
							type="text"
							name="description"
							placeholder="Enter description"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.description}
						></input>
					</div>
					<div className="inventory-input-details">
						<input
							type="number"
							name="price"
							placeholder="Enter price"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.price}
						></input>
					</div>
					<div className="inventory-input-details">
						<input
							type="file"
							name="image"
							// placeholder="Enter price"
							// onBlur={formik.handleBlur}
							onChange={e => {
								formik.setFieldValue('image',e.target.files[0])
							}}
							// value={formik.values.price}
						/>
					</div>
					{/* <div className="inventory-input-details">
						<input type="text" name="quantity" placeholder="Enter quantity"></input>
					</div> */}
					<div class="btn-add-product">
						<input type="submit" value="SAVE" />
						{/* <input type="submit" value="ADD ITEM IMAGE"></input> */}
					</div>
				</form>
			</div>
		</div>
	);
}

export default Inventory;
