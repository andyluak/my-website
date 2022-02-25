import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { getPostsByTagRequest } from '../../redux/posts/posts.actions';
import { Helmet } from 'react-helmet-async';


import Post from '../../components/Post/Post';

function TagOverview( {posts, onGetTagPosts} ) {
	let { tag } = useParams();
	// If tag has %20 in it, replace it with a space
	let tagName = tag.replace(/%20/g, ' ');

	useEffect(() => {
		onGetTagPosts(tag);
	}, []);
	return (

		<div className="container blog-container">
			<Helmet>
				<title>The most astute stories about {tagName}</title>
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
	onGetTagPosts: (tag) => dispatch(getPostsByTagRequest(tag)),
});

export default connect(mapStateToProps,mapDispatchToProps)(TagOverview);