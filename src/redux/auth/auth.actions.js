import { AuthActionTypes } from "./auth.types";
import { login } from "../../services/auth.service";

export const loginRequest = (email, password) => dispatch => {
	login(email, password).then(data => {
	dispatch({
		type: AuthActionTypes.LOGIN_SUCCESS,
		payload: { data },
	});
		return Promise.resolve();
	}, error => {
		dispatch({
			type: AuthActionTypes.LOGIN_FAILURE,
			payload: { error },
		});
	});
}