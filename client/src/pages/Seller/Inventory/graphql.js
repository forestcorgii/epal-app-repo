import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
	query ExampleQuery {
		getProducts {
			id
			name
			imageURL
			price
			description
		}
	}
`;

export const CREATE_PRODUCT = gql`
	mutation Mutation($product: ProductInput) {
		createProduct(data: $product) {
			id
			name			
		}
	}
`;