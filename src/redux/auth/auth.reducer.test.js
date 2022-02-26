import { AuthActionTypes } from './auth.types';
import { authReducer } from './auth.reducer';

describe('Auth reducer tests', () => {
	it('should return the initial state', () => {
		expect(authReducer(undefined, {})).toEqual({
			isAuthenticated: false,
			email: '',
			password: '',
		});
	});

	it('should handle LOGIN_SUCCESS', () => {
		expect(
			authReducer(
				{},
				{
					type: AuthActionTypes.LOGIN_SUCCESS,
					payload: {
						email: '',
						password: '',
					},
				}
			)
		).toEqual({
			isAuthenticated: true,
			email: '',
			password: '',
		});
	});

	it('should handle LOGIN_FAILURE', () => {
		expect(
			authReducer(
				{},
				{
					type: AuthActionTypes.LOGIN_FAILURE,
					payload: {
						email: '',
						password: '',
					},
				}
			)
		).toEqual({
			isAuthenticated: false,
			email: '',
			password: '',
		});
	});
});
