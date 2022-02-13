import posts from './posts.json';
import './blog.scss';

import React from 'react';

export default function Blog() {
	console.log(posts.posts);
	// Convert date to readable date
	const convertDate = (date) => {
		const dateObj = new Date(date);
		const month = dateObj.getMonth() + 1;
		const day = dateObj.getDate();
		const year = dateObj.getFullYear();
		return `${month}/${day}/${year}`;
	}
	return (
	<div className="container blog-container">
		<div className="posts">
		{posts.posts.map(( post, index ) => {
			return (
				<div className="post" key={index}>
					<img src={`/assets/images/${post.featuredImage}`} />
					<h1>{post.postTitle}</h1>
					<p>{convertDate(post.postDate)}</p>
					<p>{post.postContent}</p>
					<p>{post.postAuthor}</p>
					<p>{post.postCategory}</p>
					<p>{post.postTags}</p>
				</div>

			)
		})}
		</div>
	</div>
	);
}
