import './header.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Header = ({isAuthenticated}) => {
	return <div className="header">
		<Logo className="logo" />
		<nav>
			<ul>
				<li><Link to="/">Home</Link> </li>
				<li><Link to="/blog">Blog </Link> </li>
				{ isAuthenticated && <li><Link to="/admin">Admin</Link> </li> }
			</ul>
		</nav>
	</div>;
};
const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Header);
