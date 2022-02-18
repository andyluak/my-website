import React from 'react';

import CreatableSelect from 'react-select/creatable';

import { ActionMeta, OnChangeValue } from 'react-select';

export default function MultipleSelectSelect({options, setOptions}) {
	const handleChange = (newValue, actionMeta) => {
		setOptions(newValue);
	};
	return (
		<CreatableSelect
			isMulti
			onChange={handleChange}
			options={options}
		/>
	);
}
