import './header.scss';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

import React from 'react';

const Header = () => {
	return <div className="header">
		<Logo className="logo" />
		<nav>
			<ul>
				<li><Link to="/">Home</Link> </li>
				<li><Link to="/blog">Blog </Link> </li>
			</ul>
		</nav>
	</div>;
};

export default Header;
