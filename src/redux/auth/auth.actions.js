import { AuthActionTypes } from './auth.types';
import { login } from '../../services/auth.service';

export const loginRequest = (email, password) => {
	return (dispatch) => {
		return login(email, password).then(
			(data) => {
				return dispatch({
					type: AuthActionTypes.LOGIN_SUCCESS,
					payload: { data },
				});
			},
			(error) => {
				return dispatch({
					type: AuthActionTypes.LOGIN_FAILURE,
					payload: { error },
				});
			}
		);
	};
};
