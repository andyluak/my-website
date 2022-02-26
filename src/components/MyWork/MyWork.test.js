import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MyWork from './MyWork';

describe( 'My work component tests', () => {
	it( 'excepct to render My Work component', () => {
		expect(shallow(<MyWork />)).toMatchSnapshot();
	})
})

