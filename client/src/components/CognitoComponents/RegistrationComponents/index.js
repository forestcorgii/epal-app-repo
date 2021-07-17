import React,{useContext} from "react";
import AuthenticatedUserContext from "../../../contexts/CognitoContext/index";
import RegistrationFormBL from "./bl"
export default function Registration() {
  const {auth} = useContext(AuthenticatedUserContext);
  const { formik } = RegistrationFormBL();
  return (
    <div>
      {auth.Username !== undefined && !auth.email_verified ? (
        <div className="code confirmation">confirm code</div>
      ) : (
        <div class="register information">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

              <input type="submit" value="Register"/>
          </form>
        </div>
      )}
    </div>
  );
}
