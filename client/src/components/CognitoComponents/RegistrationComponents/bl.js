import * as RegistrationAdapter from "../../../Adapters/CognitoAdapter/signup";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

export default function RegistrationFormBL() {
  const history = useHistory();

  const SignUp = RegistrationAdapter.SignUp;
  // const ConfirmCode = RegistrationAdapter.ConfirmRegistration;
  // const ResendConfirmationCode = RegistrationAdapter.ResendConfirmationCode;

  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email format").required('Required'),
    password: yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema ,
    onSubmit: (values, {setSubmitting}) => {
      // alert(JSON.stringify(values, null, 2));
      // SignUp(values, () => {
        // registration succeeded
        history.replace("/cognito/verifyemail");
        setSubmitting(false)
      // });
    },
  });

  return { formik };
}
