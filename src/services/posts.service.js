import { authHeader } from "./data.service";


const API_URL = process.env.NODE_ENV === "production" ? "/api/posts" : "/posts";
export const getPosts = async () => {

	let res = await fetch(API_URL);
	let posts = await res.json();

	return posts;
}

export const getPostBySlug = async (slug) => {

	let res = await fetch(`${API_URL}/slug/${slug}`);
	let post = await res.json();

	return post;
}

export const getPostsByTag = async (tag) => {

	let res = await fetch(`${API_URL}/tags/${tag}`);
	let posts = await res.json();

	return posts;
}

export const deletePost = async (id) => {

	let res = await fetch(`${API_URL}/${id}`, {
		method: 'DELETE',
		headers: authHeader(),
	});
	let post = await res.json();
	return post;
}