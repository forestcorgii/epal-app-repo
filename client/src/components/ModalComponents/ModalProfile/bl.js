import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { PersonalInformationValidation, ProfileValidation } from "./validition";
import { UPDATE_SELLER_PROFILE } from "./graphql";
import { ForwardGeocoding } from "../../../adapters/LocationAdapter";
import React, { useState } from "react";

import UseDebouncedSearch from "../../../hooks/useDebouncedSearch";

export default function UpdateProfileBL(selectedProduct) {
	const [updateUser, updateUserStatus] = useMutation(UPDATE_SELLER_PROFILE);
	const [updateSellerProfile, updateSellerProfileStatus] = useMutation(
		UPDATE_SELLER_PROFILE
	);
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
		updateSellerProfile({
			variables: {
				profile: {
					storename: e.target.storename.value,
					description: e.target.description.value,
					address: e.target.address.value,
					location: [parseFloat(e.target.lng.value),parseFloat( e.target.lat.value)],
				},
			},
		});
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

	const GetAddress = async (text) => {
		return await ForwardGeocoding(text).then(({ items }) => {
			if (items && items.length) {
				const { title, position } = items[0];
				return {
					address: title,
					lng: position.lng,
					lat: position.lat,
				};
			}
		});
	};

	const handleAddressSearch = () =>
		UseDebouncedSearch((text) => GetAddress(text));

	return {
		user_formik,
		GetAddress,
		storeInformation,
		setStoreInformation,
		handleProfileSubmit,
		handleAddressSearch,
		updateSellerProfileStatus
	};
}
