import * as yup from "yup";

export const PersonalInformationValidation = yup.object({
	firstName: yup.string().max(40).min(2).required(),
	lastName: yup.string().max(40).min(2).required(),
	middleInitial: yup.string(),
	birthDate: yup.date("Invalid Birth Date").required(),
});
export const ProfileValidation = yup.object({
	storeName: yup.string().max(40).min(3).required(),
	address: yup.string().max(1500).required(),
});
