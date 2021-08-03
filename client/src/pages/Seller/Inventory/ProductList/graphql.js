import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
	query SellerProductList {
		sellerProductList {
			_id
			name
			imageURL
			quantity
			price
			description
		}
	}
`;
