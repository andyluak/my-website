import './blog.scss';

import React, {useEffect, useState } from 'react';

export default function Blog() {
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		let result = await fetch("/api/posts")
		let posts = await result.json();
		setPosts(posts);
	}
	// Convert date to readable date
	const convertDate = (date) => {
		const dateObj = new Date(date);
		const month = dateObj.getMonth() + 1;
		const day = dateObj.getDate();
		const year = dateObj.getFullYear();
		return `${month}/${day}/${year}`;
	}

	useEffect(() => {
		fetchPosts();
	}, []);
	return (
	<div className="container blog-container">
		<div className="posts">
		{posts.map(( post, index ) => {
			return (
				<div className="post" key={index}>
					<img src={`/assets/images/${post.featuredImage}`} />
					<h1>{post.title}</h1>
					<p>{convertDate(post.createdAt)}</p>
					<p>{post.content}</p>
					<p>{post.author}</p>
					<p>{post.postTags}</p>
				</div>

			)
		})}
		</div>
	</div>
	);
}
