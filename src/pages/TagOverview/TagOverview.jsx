import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';


import Post from '../../components/Post/Post';

export default function TagOverview() {
	let { tag } = useParams();
	// If tag has %20 in it, replace it with a space
	let tagName = tag.replace(/%20/g, ' ');
	const [tagPosts, setTagPosts] = useState([]);

	const fetchTagPosts = async () => {
		let result = await fetch(`/posts/tags/${tag}`);
		let tagPosts = await result.json();
		setTagPosts(tagPosts);
	};

	useEffect(() => {
		fetchTagPosts();
	}, []);
	return (

		<div className="container blog-container">
			<Helmet>
				<title>The most astute stories about {tagName}</title>
			</Helmet>
			<div className="posts">
				{tagPosts.map((post, index) => {
					return <Post key={index} post={post} />;
				})}
			</div>
		</div>
	);
}
