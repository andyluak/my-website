import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';

describe( 'Post component tests', () => {
	it( 'excepct to render Post component', () => {
		const mockPost = {
			title: 'Test title',
			slug: 'test-slug',
			content: {
				rendered: '<p>Test content</p>',
				text: 'Test content'
			},
			featuredImage: 'code.jpg',
			date: '2019-01-01',
			tags: [ 'javascript'],

		}
		expect(shallow(<Post index={0} post={mockPost}/>)).toMatchSnapshot();
	})
})

