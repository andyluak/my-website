import './header.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import React from 'react';

const Header = () => {
	return <div className="header">
		<Logo className="logo" />
		<nav>
			<ul>
				<li>Skills</li>
				<li>Portfolio</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	</div>;
};

export default Header;
