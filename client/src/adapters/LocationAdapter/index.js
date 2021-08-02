export function ReverseGeocoding(lat, long) {
	return axios
		.get("http://api.positionstack.com/v1/reverse", {
			params: {
				query: `${lat},${long}`,
				limit: 3,
				access_key: "ed6d028383dd20c398fa0e37585efffa",
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((error) => alert(error));
}
