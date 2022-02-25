import { PostActionTypes } from './posts.types';

const initialState = {
	posts: [],
};

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case PostActionTypes.GET_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload,
			};
		case PostActionTypes.GET_POSTS_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		case PostActionTypes.GET_POST_BY_SLUG_SUCCESS:
			return {
				...state,
				post: action.payload,
			};
		case PostActionTypes.GET_POST_BY_SLUG_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		case PostActionTypes.GET_POSTS_BY_TAG_SUCCESS:
			return {
				...state,
				posts: action.payload,
			};
		case PostActionTypes.GET_POSTS_BY_TAG_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		case PostActionTypes.DELETE_POST_SUCCESS: {
			const posts = state.posts.filter(
				(post) => post.id !== action.payload.id
			);
			return {
				...state,
				posts,
			};
		}
		case PostActionTypes.DELETE_POST_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
