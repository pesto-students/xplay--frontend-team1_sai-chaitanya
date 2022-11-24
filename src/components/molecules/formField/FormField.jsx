import React from 'react';

import { Input } from 'antd';
import PropTypes from 'prop-types';

import FormItem from '../formItem';

const FormField = ({ id, label, name, placeholder, rules, type }) => (
	<FormItem id={`${id}-item`} label={label} name={name} rules={rules}>
		{type === 'password' ? (
			<Input.Password id={id} placeholder={placeholder} />
		) : (
			<Input id={id} placeholder={placeholder} type={type} />
		)}
	</FormItem>
);

FormField.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	rules: PropTypes.arrayOf(PropTypes.object),
	type: PropTypes.string
};

FormField.defaultProps = {
	placeholder: 'enter your input',
	rules: [],
	type: 'text'
};

export default FormField;
