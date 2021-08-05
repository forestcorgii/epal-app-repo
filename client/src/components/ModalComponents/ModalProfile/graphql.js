import { gql } from "@apollo/client";

export const UPDATE_SELLER_PROFILE = gql`
	mutation UpdateSellerProfile($profile: SellerInput) {
		updateSellerInfo(data: $profile) {
			id
		}
	}
`;
