import { gql } from "@apollo/client";

export const UPDATE_SELLER_PROFILE = gql`
	mutation UpdateSellerProfile($personalInformation: PersonalInformationInput!) {
		updateSellerInfo(data: $personalInformation) {
			id
		}
	}
`;
export const UPDATE_USER_PERSONAL_INFORMATION = gql`
	mutation UpdateUser($personalInformation: PersonalInformationInput!) {
		updateUserPersonalInformation(data: $personalInformation) {
			id
		}
	}
`;
