import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "./graphql";
export default function ProductListBL() {
	const { data, loading, error } = useQuery(GET_PRODUCTS);

	return { data, loading, error };
}
