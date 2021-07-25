import React, { useContext } from "react";
import AuthContext from "../../contexts/Auth";
import { useFormik } from "formik";
export default function BL() {
	const { user } = useContext(AuthContext);
	const formik = useFormik({
		initialValues: {
			file: null,
		},
	});
	return { user };
}
