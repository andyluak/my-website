import { PostActionTypes } from './posts.types';
import { getPosts, getPostBySlug, getPostsByTag, deletePost } from "../../services/posts.service";

export const getPostsRequest = () => dispatch => {
	getPosts().then(data => {
	dispatch({
		type: PostActionTypes.GET_POSTS_SUCCESS,
		payload: data ,
	});
		return Promise.resolve();
	}, error => {
		dispatch({
			type: PostActionTypes.GET_POSTS_FAILURE,
			payload: { error },
		});
	});
}

export const getPostBySlugRequest = (slug) => dispatch => {
	getPostBySlug(slug).then(data => {
	dispatch({
		type: PostActionTypes.GET_POST_BY_SLUG_SUCCESS,
		payload: data ,
	});
		return Promise.resolve();
	}, error => {
		dispatch({
			type: PostActionTypes.GET_POST_BY_SLUG_FAILURE,
			payload: { error },
		});
	});
}

export const getPostsByTagRequest = (tag) => dispatch => {
	getPostsByTag(tag).then(data => {
	dispatch({
		type: PostActionTypes.GET_POSTS_BY_TAG_SUCCESS,
		payload: data ,
	});
		return Promise.resolve();
	}, error => {
		dispatch({
			type: PostActionTypes.GET_POSTS_BY_TAG_FAILURE,
			payload: { error },
		});
	});
}

export const deletePostRequest = (id) => dispatch => {
	deletePost(id).then(data => {
	dispatch({
		type: PostActionTypes.DELETE_POST_SUCCESS,
		payload: data ,
	});
		return Promise.resolve();
	}, error => {
		console.log(error);
		dispatch({
			type: PostActionTypes.DELETE_POST_FAILURE,
			payload: { error },
		});
	});
}
