import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { AVAILABLE_PRODUCTS } from "./graphql";
export default function BL() {
	const [getAvailableProducts, { loading, error, data }] =
		useLazyQuery(AVAILABLE_PRODUCTS);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			console.log(`${position.coords.latitude},${position.coords.longitude}`);
			getAvailableProducts({
				variables: {
					location:[position.coords.longitude,position.coords.latitude]
				}
			})
		});
	}, []);

	return {  loading, error, data };
}
