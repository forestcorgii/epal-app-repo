import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import {SignUp} from "../../../adapters/CognitoAdapter/signup"
export default function RegistrationFormBL() {
	const history = useHistory();

	const validationSchema = yup.object({
		email: yup.string().email("Invalid Email format").required("Required"),
		password: yup.string().required("Required"),
	});

	const formik = useFormik({
		initialValues: { email: "", password: "" },
		validationSchema: validationSchema,
		onSubmit: (values, { setSubmitting }) => {
			// alert(JSON.stringify(values, null, 2));
			SignUp(values, (success,username) => {
        if (success) {
          // registration succeeded, create user profile to mongodb depending on the user type
          history.replace("/cognito/verifyemail");          
        }
        setSubmitting(false);
			});
		},
	});

	return { formik };
}
