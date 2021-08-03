import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_SELLER_PROFILE } from "./graphql";
export default function BL() {
	const profileState = useQuery(GET_SELLER_PROFILE);
	


	return { ...profileState };
}
