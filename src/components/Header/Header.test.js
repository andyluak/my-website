import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe( 'Header component tests', () =>{
	describe( 'Header not authenticated component tests', () => {
		let wrapper;
		beforeEach( () => {
			const mockProps = {
				isAuthenticated: false,
			}
			wrapper = shallow( <Header {...mockProps} /> );
		});
		it( 'expect Header to render without crashing', () => {
			expect(wrapper).toMatchSnapshot();
		})

		it( 'expect to have 2 links in the header', () => {
			expect(wrapper.find('Link')).toHaveLength(2);
		});


	})


	describe( 'Header authorized component tests', () => {
		let wrapper;
		beforeEach( () => {
			const mockProps = {
				isAuthenticated: true,
			}
			wrapper = shallow( <Header {...mockProps} /> );
		});

		it( 'expect to have 3 links in the header', () => {
			expect(wrapper.find('Link')).toHaveLength(3);
		})
	})
})


