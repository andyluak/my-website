import { PostActionTypes } from './posts.types';
import { postsReducer } from './posts.reducer';

describe('Posts reducer tests', () => {
	it('should return the initial state', () => {
		expect(postsReducer(undefined, {})).toEqual({
			posts: [],
		});
	});

	it('should handle GET_POSTS_SUCCESS', () => {
		expect(
			postsReducer(
				{},
				{
					type: PostActionTypes.GET_POSTS_SUCCESS,
					payload: [{ id: 1, title: 'Test', body: 'Test' }],
				}
			)
		).toEqual({
			posts: [{ id: 1, title: 'Test', body: 'Test' }],
		});
	});

	it('should handle GET_POSTS_FAILURE', () => {
		expect(
			postsReducer(
				{},
				{
					type: PostActionTypes.GET_POSTS_FAILURE,
					payload: { error: 'Test' },
				}
			)
		).toEqual({
			error: { error: 'Test' },
		});
	});

	it('should handle GET_POST_BY_SLUG_SUCCESS', () => {
		expect(
			postsReducer(
				{},
				{
					type: PostActionTypes.GET_POST_BY_SLUG_SUCCESS,
					payload: { id: 1, title: 'Test', body: 'Test' },
				}
			)
		).toEqual({
			post: { id: 1, title: 'Test', body: 'Test' },
		});
	});

	it('should handle GET_POST_BY_SLUG_FAILURE', () => {
		expect(
			postsReducer(
				{},
				{
					type: PostActionTypes.GET_POST_BY_SLUG_FAILURE,
					payload: { error: 'Test' },
				}
			)
		).toEqual({
			error: { error: 'Test' },
		});
	});

	it('should handle GET_POSTS_BY_TAG_SUCCESS', () => {
		expect(
			postsReducer(
				{},
				{
					type: PostActionTypes.GET_POSTS_BY_TAG_SUCCESS,
					payload: [
						{ id: 1, title: 'Test', body: 'Test' },
						{ id: 2, title: 'Test', body: 'Test' },
					],
				}
			)
		).toEqual({
			posts: [
				{ id: 1, title: 'Test', body: 'Test' },
				{ id: 2, title: 'Test', body: 'Test' },
			],
		});
	});
});
