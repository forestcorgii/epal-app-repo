import { useHistory, useParams } from "react-router-dom";
import {
	ConfirmRegistration,
	ResendConfirmationCode,
} from "../../../adapters/CognitoAdapter/emailverifier";

export default function EmailVerifierBL() {
	const history = useHistory();
	const { username } = useParams();
	const handleSubmit = (e) => {
		e.preventDefault();
		ConfirmRegistration(username, e.target.code.value, (success) => {
			if (success) history.push("/");
		});
	};

	function resendConfirmationCode() {
		ResendConfirmationCode(username);
	}
	return { handleSubmit, resendConfirmationCode };
}
