import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Hero from './Hero';

describe( 'Hero component tests', () => {
	it( 'excepct to render Hero component', () => {
		expect(shallow(<Hero />)).toMatchSnapshot();
	})
})

