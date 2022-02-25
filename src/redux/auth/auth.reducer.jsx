import {AuthActionTypes} from './auth.types';

const initialState = {
	isAuthenticated: false,
	email: '',
	password: '',
};

let authCookie = document.cookie
	.split(';')
	.find((c) => c.trim().startsWith('bearer='));
let bearer = authCookie ? authCookie.split('=')[1] : null;

initialState.isAuthenticated = !!bearer;

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AuthActionTypes.LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				email: '',
				password: '',
				loggedIn: true,
			};
		case AuthActionTypes.LOGIN_FAILURE:
			return {
				...state,
				isAuthenticated: false,
				email: '',
				password: '',
			};
		default: return state;
	}
};
