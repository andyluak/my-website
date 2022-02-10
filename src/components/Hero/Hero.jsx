import './hero.scss';
import { ReactComponent as Avatar } from '../../assets/images/avatar.svg';

import React from 'react';

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero_text">
				<h1>I build stuff</h1>
				<p>Complete web solutions for you and your business</p>
			</div>

			<div className="hero_image">
				<Avatar />
			</div>
		</div>
	)
}

export default Hero;