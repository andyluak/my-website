import { authHeader } from "./data.service";

export const getPosts = async () => {

	let res = await fetch('/posts');
	let posts = await res.json();

	return posts;
}

export const getPostBySlug = async (slug) => {

	let res = await fetch(`/posts/slug/${slug}`);
	let post = await res.json();

	return post;
}

export const getPostsByTag = async (tag) => {

	let res = await fetch(`/posts/tags/${tag}`);
	let posts = await res.json();

	return posts;
}

export const deletePost = async (id) => {

	let res = await fetch(`/posts/${id}`, {
		method: 'DELETE',
		headers: authHeader(),
	});
	let post = await res.json();
	return post;
}