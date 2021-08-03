import React, { useContext, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import { useHistory } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth";

const GET_PRODUCTS = gql`
	query ExampleQuery {
		sellerProductList {
			_id
			name
			imageURL
			price
			description
		}
	}
`;

export default function BL() {
	const { user } = useContext(AuthContext);
	const { loading,error, data } = useQuery(GET_PRODUCTS);

	return { user, loading,error, data};
}
