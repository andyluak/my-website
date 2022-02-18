import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Tag from '../../components/Tag/Tag';

export default function Post({ index, post }) {
	let imageUrl = `https://portfoliostorage.fra1.digitaloceanspaces.com/${post.featuredImage}`;
	// Convert spaces in url to %20
	imageUrl = imageUrl.replace(/\s/g, '%20');

	return (
		<div className="post" key={index}>
			<div
				className="post-img"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<h1>
				<Link to={`/${post.slug}`}>{post.title}</Link>
			</h1>

			<p
				className="post-content"
			>
				{post.content.text.substring(0, 40)}...
			</p>

			<div className="post-meta-container">
				<div className="post-author">
					<p className="author">{post.author}</p>
					<p className="date">
						{moment(post.createdAt).format('MMMM Do YYYY')}
					</p>
				</div>

				<div className="tags">
					{post.tags.map((tag, index) => {
						return <Tag key={index} tag={tag} />;
					})}
				</div>
			</div>
		</div>
	);
}
