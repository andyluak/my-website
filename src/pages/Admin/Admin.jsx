import './admin.scss';

import React, { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

export default function Admin() {
	const [postHTML, setPostHTML] = useState('');
	const [postText, setPostText] = useState('');
	const [post, setPost] = useState({});
	const [image, setImage] = useState({ preview: '', data: '' });
	const [tags, setTags] = useState([]);
	const handleChange = (e) => {
		if (e.target.name === 'featuredImage') {
			const img = {
				preview: URL.createObjectURL(e.target.files[0]),
				data: e.target.files[0],
			};
			setImage(img);
		} else {
			setPost({ ...post, [e.target.name]: e.target.value });
		}
	};

	const generateSlugFromTitle = (title) => {
		let slug = title.trim();
		// Remove commas, dots, spaces, slashes and everything except letters and numbers
		slug = title.replace(/[^a-zA-Z0-9]/g, ' ');
		slug = slug.toLowerCase().replace(/\s+/g, '-');
		return slug;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formattedTags = tags.map(({ value }) => value);
		const slug = generateSlugFromTitle(post.title);

		// Send the image to the server
		let formData = new FormData();
		formData.append('file', image.data);
		fetch(`/upload`, {
			method: 'POST',
			body: formData,
			headers: {
				Accept: 'application/json',
			},
		});

		// Fetch with bearer
		fetch('/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjA4YzBlNGU3MTdmMDZiZDExZjI5NDciLCJlbWFpbCI6ImFuZHluaG8uc3RhckBnbWFpbC5jb20iLCJwZXJtaXNzaW9uTGV2ZWwiOjIwNDgsInByb3ZpZGVyIjoiZW1haWwiLCJuYW1lIjoidW5kZWZpbmVkIHVuZGVmaW5lZCIsInJlZnJlc2hLZXkiOiIvWVFieHpSNDB1SEVqdFFncDFRS3pRPT0iLCJpYXQiOjE2NDQ3NDE1MTd9.Hh5tDgqChN96f-1ASFuScTPB94Z0ZX8Fr9k4ny4WkpY`,
			},
			body: JSON.stringify({
				title: post.title,
				author: post.author === '' ? 'Alex' : post.author,
				content: {
					html: postHTML,
					text: postText,
				},
				slug: slug,
				tags: formattedTags,
				featuredImage: image.data.name,
			}),
		});
	};

	return (
		<div className="container-fluid container-with-sidebar">
			<div className="sidebar">
				<div className="sidebar-header">
					<h3>Admin</h3>
				</div>

				<div className="sidebar-content">
					<Link to='/admin/new'><p>Write new post</p></Link>
					<Link to='/admin/manager'><p>Manage posts</p></Link>
				</div>
			</div>
			<Outlet />
		</div>
	);
}
