import React from 'react';

import { Input } from 'antd';
import PropTypes from 'prop-types';

import FormItem from '../formItem';

const FormField = ({
	id,
	label,
	name,
	onChange,
	placeholder,
	rules,
	type
}) => (
	<FormItem
		id={`${id}-item`}
		label={label}
		name={name}
		rules={rules}>
		{type === 'password' ? (
			<Input.Password
				allowClear
				id={id}
				onChange={onChange}
				placeholder={placeholder}
			/>
		) : (
			<Input
				allowClear
				id={id}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
			/>
		)}
	</FormItem>
);

FormField.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	rules: PropTypes.arrayOf(PropTypes.object),
	type: PropTypes.string
};

FormField.defaultProps = {
	label: '',
	onChange: () => { },
	placeholder: 'enter your input',
	rules: [],
	type: 'text'
};

export default FormField;
