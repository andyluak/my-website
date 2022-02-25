import './postmanager.scss';

import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router';

export default function PostManager() {
	const [posts, setPosts] = useState([]);
	const { postID } = useParams();
	console.log(postID);

	const fetchPosts = async () => {
		const response = await fetch('/posts');
		const json = await response.json();
		setPosts(json);
	};

	useEffect(() => fetchPosts(), []);

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
										<button>Delete</button>
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
