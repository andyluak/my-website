import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from './Footer';

describe( 'Footer component tests', () => {
	it( 'excepct to render Footer component', () => {
		expect(shallow(<Footer />)).toMatchSnapshot();
	})
})

