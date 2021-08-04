import axios from "axios";

export function UploadImage(file) {
	return axios
		.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/s3/signin/upload`, {
			params: {
				filename: file.name,
				filetype: file.type,
			},
		})
		.then((res) => {
			const options = {
				headers: {
					"Content-Type": file.type,
				},
			};
			return axios.put(res.data.url, file, options);
		})
		.then((res) => {
			const { name } = res.config.data;
			return {
				name,
				isUploading: true,
				url: `https://${process.env.REACT_APP_BUCKET}.s3.amazonaws.com/${file.name}`,
			};
		});
}

// export function DeleteImage() {
// 	return axios.
// }