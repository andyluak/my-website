import './postmanager.scss';

import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { getPostsRequest, deletePostRequest } from '../../redux/posts/posts.actions';

function PostManager( { posts, onGetPosts, onDeletePost } ) {
	const { postID } = useParams();

	useEffect(() => {
		onGetPosts();
	}, []);

	if( !posts.length ) {
		return <div>Loading...</div>;
	}


	return (
		<>
			{postID ? (
				<Outlet />
			) : (
				<table className="post_manager">
					<thead>
						<tr>
							<th>Title</th>
							<th>Slug</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{posts.map((post, index) => {
							return (
								<tr key={index}>
									<td>{post.title}</td>
									<td>{post.slug}</td>
									<td>
										<Link to={`/admin/manager/${post.id}`}>
											<button>Edit</button>
										</Link>
										<button onClick={()=> onDeletePost(post.id)}>Delete</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</>
	);
}

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
});

const mapDispatchToProps = dispatch => ({
	onGetPosts: () => dispatch(getPostsRequest()),
	onDeletePost: (id) => dispatch(deletePostRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostManager);