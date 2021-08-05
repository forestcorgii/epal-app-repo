import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { SignUp } from "../../../adapters/CognitoAdapter/signup";
import { CREATE_USER } from "./graphql";
import { useMutation } from "@apollo/client";

export default function RegistrationFormBL() {
	const history = useHistory();

	const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

	const validationSchema = yup.object({
		email: yup.string().email("Invalid Email format").required(""),
		password: yup.string().required(""),
	});

	const formik = useFormik({
		initialValues: { email: "", password: "" },
		validationSchema: validationSchema,
		onSubmit: (values, { setSubmitting }) => {
			// alert(JSON.stringify(values, null, 2));
			SignUp(values, (success, username) => {
				if (success) {
					// registration succeeded, create user profile to mongodb depending on the user type
					createUser();
					history.replace("/cognito/verifyemail");
				}
				setSubmitting(false);
			});
		},
	});

	return { formik };
}
