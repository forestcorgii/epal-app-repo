import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import ValidationSchema from "./validition";
import { CREATE_PRODUCT } from "./graphql";
import { UploadImage } from "../../../../adapters/S3Adapter";
export default function AddProductFormBL() {
	const [createProduct, { data, loading, error }] =
		useMutation(CREATE_PRODUCT);

	const handleSubmit = async (values, { setSubmitting }) => {
		// upload then execute mutation
		console.log(values);
		var imageURL = null;
		await UploadImage(values.image).then((res) => {
			imageURL = res.url;
			console.log(imageURL);
		});

		if (imageURL) {
		console.log(values);
			createProduct({
				variables: {
					product: {
						description: values.description,
						name: values.productName,
						price: values.price,
						quantity: values.quantity,
						imageURL: imageURL,
					},
				},
			});
		}
		setSubmitting(false);
	};
	const formik = useFormik({
		initialValues: {
			// id: null,
			productName: "",
			description: "",
			price: 0,
			quantity:0,
			image: null,
		},
		validationSchema: ValidationSchema,
		onSubmit: handleSubmit,
	});

	return { formik };
}
