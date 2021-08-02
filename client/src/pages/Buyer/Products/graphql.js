import { gql } from "@apollo/client";


export const AVAILABLE_PRODUCTS = gql`
	query AvailableProductList($location: [Float!]!) {
		availableProductList(location: $location) {
			_id
			name
			imageURL
			price
			description
		}
	}
`;