import axios from "axios";
import GetToken from "../OAuthAdapter";
export function ForwardGeocoding(searchString) {
	var config = {
		method: "get",
		url: "https://geocode.search.hereapi.com/v1/geocode",
		params: { q: searchString, limit: 1 },
		headers: {
			Authorization: `Bearer ${GetToken()}`,
		},
	};

	return axios(config)
		.then(function (response) {
			// console.log(JSON.stringify(response.data));
			return response.data
		})
		.catch(function (error) {
			console.log(error);
		});
}
export async function ReverseGeocoding(lat, long) {
	const token =await GetToken()
	var config = {
		method: "get",
		url: "https://revgeocode.search.hereapi.com/v1/revgeocode",
		params: {
			at: `${lat},${long}`,
			limit: 1,
		},
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	return await axios(config)
		.then(function (response) {
			// console.log(JSON.stringify(response.data));
			return response.data
		})
		.catch(function (error) {
			console.log(error);
		});
}
