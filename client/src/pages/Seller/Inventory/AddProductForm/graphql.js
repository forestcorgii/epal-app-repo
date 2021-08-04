import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
	mutation Mutation($product: ProductInput) {
		createProduct(data: $product) {
			_id
			name			
		}
	}
`;