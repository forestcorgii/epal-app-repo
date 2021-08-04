import * as yup from "yup";

export default yup.object({
	productName: yup.string().max(40).min(3).required(),
	description: yup.string().max(1500),
	price: yup.number().required(),
	quantity: yup.number().required(),
});
