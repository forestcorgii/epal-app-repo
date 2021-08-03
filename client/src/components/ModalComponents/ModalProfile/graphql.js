import { gql } from "@apollo/client";

export const UPDATE_SELLER_PROFILE = gql`
	mutation UpdateSellerProfile($personalInformation: PersonalInformationInput!) {
		updateSellerInfo(data: $personalInformation) {
			id
		}
	}
`;
