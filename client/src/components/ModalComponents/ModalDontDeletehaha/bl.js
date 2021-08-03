import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { PersonalInformationValidation, ProfileValidation } from "./validition";
import { UPDATE_SELLER_PROFILE } from "./graphql";
import { ReverseGeocoding } from "../../../adapters/LocationAdapter";
import React, { useState } from "react";
export default function UpdateProfileBL(selectedProduct) {
	const [updateUser, updateUserStatus] = useMutation(UPDATE_SELLER_PROFILE);
	const [updateSellerProfile, updateSellerProfileStatus] = useMutation(UPDATE_SELLER_PROFILE);
	const [storeInformation, setStoreInformation] = useState({});

	const handlePersonalInformationSubmit = async (values, { setSubmitting }) => {
		// upload then execute mutation
		console.log(values);
		// var imageURL = null;
		// await UploadImage(values.image).then((res) => {
		// 	imageURL = res.url;
		// 	console.log(imageURL);
		// });

		// if (imageURL) {
		// console.log(values);
		// 	createProduct({
		// 		variables: {
		// 			product: {
		// 				description: values.description,
		// 				name: values.productName,
		// 				price: values.price,
		// 				quantity: values.quantity,
		// 				imageURL: imageURL,
		// 			},
		// 		},
		// 	});
		// }
		setSubmitting(false);
	};
	const handleProfileSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.storeName.value);
		console.log(e.target.address.value);
	};

	const user_formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			middleInitial: "",
			birthDate: null,
		},
		validationSchema: PersonalInformationValidation,
		onSubmit: handlePersonalInformationSubmit,
	});

	const GetAddress = async () => {
		navigator.geolocation.getCurrentPosition(function (position) {
			const lat = position.coords.latitude;
			const long = position.coords.longitude;
			ReverseGeocoding(lat, long).then(({ items }) => {
				if (items && items.length) {
					setStoreInformation({
						...storeInformation,
						address: items[0].title,
						location: [long, lat],
					});
				}
			});
		});
	};

	return { user_formik, GetAddress, storeInformation, handleProfileSubmit };
}
