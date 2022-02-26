import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Skills from './Skills';

describe( 'Skills component tests', () => {
	it( 'excepct to render Skills component', () => {
		expect(shallow(<Skills />)).toMatchSnapshot();
	})
})

