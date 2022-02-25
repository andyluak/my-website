import './blog.scss';

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';

import { getPostsRequest } from '../../redux/posts/posts.actions';

import Post from '../../components/Post/Post';

function Blog( { posts, onGetPosts } ) {
	useEffect(() => {
		onGetPosts();
	}, []);

	if( !posts.length ) {
		return <div>Loading...</div>;
	}

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

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
});

const mapDispatchToProps = (dispatch) => ({
	onGetPosts: () => dispatch(getPostsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);