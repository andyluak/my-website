import './footer.scss';

import React from 'react';
import { ReactComponent as Github } from '../../assets/images/github.svg';
import { ReactComponent as Linkedin } from '../../assets/images/linkedin.svg';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';

const Footer = () => {
	return (
		<footer>
			<h4>Follow me on all the socials</h4>
			<div className="social_links">
				<a
					href="https://github.com/andyluak"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github className="social-icon" />
				</a>
				<a
					href="https://www.linkedin.com/in/alex-tirim-155a95192/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Linkedin className="social-icon" />
				</a>
				<a
					href="https://www.instagram.com/andylukak"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Instagram className="social-icon" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
