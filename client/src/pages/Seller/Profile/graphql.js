import { gql } from "@apollo/client";

export const GET_SELLER_PROFILE = gql`
	query GetSellerProfile {
		getSellerPrivateInfo {
			id
			storename
			imageURL
			address
			description
			location
		}
	}
`;
