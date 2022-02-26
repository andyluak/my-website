import React from 'react';
import { shallow, render } from 'enzyme';
import FormInput from './FormInput';

describe( 'FormInput component tests', () =>{
	const mockHandleChange = jest.fn();
	const mockLabel = 'Test Label';
	const mockOtherProps = {
		name: 'test',
		type: 'text',
		value: 'test',
	};

	it( 'excepct to render FormInput component', () => {
		expect(shallow(<FormInput label={mockLabel} handleChange={mockHandleChange} {...mockOtherProps} />)).toMatchSnapshot();
	})

	// expect to render with value
	it( 'excepct to render FormInput component with value', () => {
		expect(render(<FormInput label={mockLabel} handleChange={mockHandleChange} {...mockOtherProps} value={1}/>)).toMatchSnapshot();
	})
})


