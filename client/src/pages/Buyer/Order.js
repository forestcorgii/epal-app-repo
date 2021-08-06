function Order(){
    return (
        <div>
            <div className="order-table">
			{/* ADD ANOTHER CELL FOR ITEM IMAGE */}
			<table>
				<tr>
          <th>TransactionNo.</th>
					<th>Image</th>
					<th>ItemNo.</th>
					<th>Item Name</th>
					<th>Item Description</th>
					<th>Quantity</th>
          <th>Total Price</th>
          <th>Status</th>
				</tr>
				{/* {loading ? (
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
				)} */}
			</table>
		</div>


        </div>

      );

}

function Transanctions_Table(){
  return (
      <div></div>

  );

}
export default Order;