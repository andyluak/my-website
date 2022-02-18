import './tag.scss';

import React from 'react';
import { Link } from 'react-router-dom';

export default function Tag({index, tag}) {
	return (
		<span className="tag" key={index}>
			<Link to={`/tags/${tag}`}> {tag} </Link>
		</span>
	);
}
