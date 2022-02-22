import './blog.scss';

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Post from '../../components/Post/Post';

export default function Blog() {
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		let result = await fetch('/posts');
		let posts = await result.json();
		setPosts(posts);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className="container blog-container">
			<Helmet>
				<title>Latest blog posts</title>
			</Helmet>
			<div className="posts">
				{posts.map((post, index) => {
					return <Post key={index} post={post} />;
				})}
			</div>
		</div>
	);
}
