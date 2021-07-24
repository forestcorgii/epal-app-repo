import React, { useContext, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import { useHistory } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth";

const GET_SELLER_INFO = gql`
	query GetUser {
		getSellerInfo {
			id
			username
			createdAt
			store {
				description
				address
				location
			}
		}
	}
`;

export default function BL() {
	const { user } = useContext(AuthContext);
	const {
		loading,
		error,
		data,
	} = useQuery(GET_SELLER_INFO);

	return { user, loading, error,data };
}
