import React, { useState } from 'react';

import RichText from '../../components/RichText/RichText';
import MultipleSelect from '../../components/MultipleSelect/MultipleSelect';
import CustomButton from '../../components/CustomButton/CustomButton';
import {authHeader} from '../../services/data.service';

export default function PostWriter() {
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
				...authHeader(),
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
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<input
					className="title-input input"
					onChange={(e) => handleChange(e)}
					type="text"
					placeholder="Title"
					name="title"
					autoComplete="off"
					autoCapitalize="on"
					data-lpignore="true"
				/>
				<RichText
					value={postHTML}
					setPostHTML={setPostHTML}
					setPostText={setPostText}
				/>
				<MultipleSelect options={tags} setOptions={setTags} />
				<input
					onChange={(e) => handleChange(e)}
					type="file"
					placeholder="Image"
					name="featuredImage"
				/>
				<CustomButton type="submit">Submit</CustomButton>
			</form>
		</div>
	);
}
