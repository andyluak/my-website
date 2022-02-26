import React from 'react';
import { shallow, render } from 'enzyme';
import CustomButton from './CustomButton';

describe( 'Custom button component tests', () =>{
	it( 'excepct to render Custom Button component', () => {
		expect(shallow(<CustomButton />)).toMatchSnapshot();
	})

	it( 'excepct to render Custom Button component with children', () => {
		expect(render(<CustomButton>Hello</CustomButton>)).toMatchSnapshot();
	})

	it( 'excepct to render Custom Button component with children and props', () => {
		expect(render(<CustomButton disabled>Hello</CustomButton>)).toMatchSnapshot();
	})

	it( 'excepct to render Custom Button component with children and type submit', () => {
		expect(render(<CustomButton type="submit">Hello</CustomButton>)).toMatchSnapshot();
	})
})