import * as yup from "yup";

export const PersonalInformationValidation = yup.object({
	productName: yup.string().max(40).min(3).required(),
	description: yup.string().max(1500),
	price: yup.number().required(),
	quantity: yup.number().required(),
});
export const ProfileValidation = yup.object({
	storeName: yup.string().max(40).min(3).required(),
	address: yup.string().max(1500).required(),
});
