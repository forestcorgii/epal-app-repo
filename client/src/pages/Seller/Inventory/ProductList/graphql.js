import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
	query GetProducts {
		getProducts {
			id
			name
			imageURL
			quantity
			price
			description
		}
	}
`;
