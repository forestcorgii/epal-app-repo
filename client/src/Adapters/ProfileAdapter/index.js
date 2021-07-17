import * as xhr from "../xhr/index";

export async function getProfile() {
	const res = await xhr.get("/profiles/");
	console.log(res.status);
	return res.data;
}