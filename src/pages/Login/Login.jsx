import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';

import { loginRequest } from '../../redux/auth/auth.actions';
import SignIn from '../../components/SignIn/Signin';

function Login( { isAuthenticated, onLogin} ) {
	if (isAuthenticated) {
		return <Navigate to="/admin/manager" />;
	}
	return (
		<div className="container">
			<h1>Hello Alex</h1>
			<SignIn isAuthenticated={isAuthenticated} onLogin={onLogin} />
		</div>
	);
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	email: state.auth.email,
	password: state.auth.password,
});

const mapDispatchToProps = (dispatch) => ({
	onLogin: (email, password) => dispatch(loginRequest(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
