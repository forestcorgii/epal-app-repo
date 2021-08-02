import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
	query SellerProductList {
		sellerProductList {
			id
			name
			imageURL
			quantity
			price
			description
		}
	}
`;
