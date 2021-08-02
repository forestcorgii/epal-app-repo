import { useState } from "react"


export default function InventoryBL() {
	const [product,setProduct ] = useState(null)
	const handleClick = selectedProduct => {
		console.log(selectedProduct)
		setProduct(selectedProduct)
	}

	return {handleClick, product}
}