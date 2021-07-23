import React, { useContext, useEffect, useState } from "react";
import { useQuery,gql } from "@apollo/client";

import { useHistory } from "react-router-dom";

import { AuthContext } from "../contexts/Auth";

export default function BL() {
	const { user }= useContext(AuthContext)

	const PRODUCT = gql`

	`




	return {}
}