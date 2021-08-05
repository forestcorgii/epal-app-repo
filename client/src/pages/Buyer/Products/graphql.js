import { gql } from "@apollo/client";


export const AVAILABLE_PRODUCTS = gql`
	query AvailableProductList($location: [Float!]!,$maxDistance:Float!) {
		availableProductList(location: $location, maxDistance: $maxDistance) {
			_id
			name
			imageURL
			price
			description
		}
	}
`;