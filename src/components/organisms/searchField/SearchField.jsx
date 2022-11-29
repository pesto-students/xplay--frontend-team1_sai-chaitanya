import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Typography } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { Content } from 'antd/lib/layout/layout';
import { SearchOutlined } from '@ant-design/icons';

import Form from '../form';
import Molecules from '../../molecules';
import styles from './searchField.module.scss';

const SearchField = ({ onClick, title }) => {
	const [form] = useForm();

	const handleInputChange = (e) => {
		if (!e?.target?.value) {
			form.resetFields();
		}
	}

	const handleSubmit = (formData) => {
		onClick(formData?.search);
	};

	return (
		<Content>
			<Row className={styles.titleRow}>
				<Col
					lg={23}
					md={20}
					sm={20}
					xl={23}
					xs={20}
					xxl={23}>
					<Typography.Title
						className={styles.movieListTitle}
						level={4}
						style={{
							color: '#FFF'
						}}>
						{title}
					</Typography.Title>
				</Col>
			</Row>
			<Form
				ariaLabel="Search"
				form={form}
				formWidth={{
					lg: 12,
					md: 12,
					sm: 20,
					span: 12,
					xl: 12,
					xs: 20
				}}
				id="search-form"
				name="search-form"
				onSubmit={handleSubmit}
				submitIcon={<SearchOutlined />}
				submitLabel="Search"
				wrapperClass={styles.form}>
				<Molecules.FormField
					id="search"
					name="search"
					placeholder="Enter movie title"
					onChange={handleInputChange}
					rules={[{
						required: true,
						message: `Please enter movie title!`
					}]}
				/>
			</Form>
		</Content>
	);
}

SearchField.propTypes = {
	onClick: PropTypes.func,
	title: PropTypes.string
};

SearchField.defaultProps = {
	onClick: () => { },
	title: 'Search for a movie'
};

export default SearchField;
