import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form as AntdForm, Row, Typography } from 'antd';

import styles from './form.module.scss';

const Form = ({
	ariaLabel,
	children,
	error,
	form,
	formWidth,
	id,
	initialValues,
	labelAlign,
	layout,
	loading,
	name,
	onError,
	onReset,
	onSubmit,
	submitIcon,
	submitLabel,
	wrapperClass
}) => {
	return (
		<Row justify="center">
			<Col {...formWidth}>
				<AntdForm
					aria-label={ariaLabel}
					autoComplete="off"
					className={wrapperClass}
					form={form}
					initialValues={{
						remember: true,
						...initialValues
					}}
					id={id}
					labelAlign={labelAlign}
					layout={layout}
					name={name}
					onFinish={onSubmit}
					onFinishFailed={onError}
					onReset={onReset}>
					{children}

					{error?.hasError && (
						<Row justify="center">
							<Col>
								<Typography.Text type="danger">
									{error?.message}
								</Typography.Text>
							</Col>
						</Row>
					)}

					<Row justify="center">
						<Col>
							<Button
								className={styles.submitButton}
								htmlType="submit"
								icon={submitIcon}
								loading={loading}
								type="primary">
								{submitLabel}
							</Button>
						</Col>
					</Row>
				</AntdForm>
			</Col>
		</Row>
	);
};

Form.propTypes = {
	ariaLabel: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	error: PropTypes.shape({ error: PropTypes.bool, message: PropTypes.string }),
	form: PropTypes.any,
	formWidth: PropTypes.object,
	id: PropTypes.string.isRequired,
	initialValues: PropTypes.object,
	labelAlign: PropTypes.oneOf(['left', 'right']),
	layout: PropTypes.oneOf(['inline', 'horizontal', 'vertical']),
	loading: PropTypes.bool,
	name: PropTypes.string,
	onError: PropTypes.func,
	onReset: PropTypes.func,
	onSubmit: PropTypes.func.isRequired,
	submitIcon: PropTypes.element,
	submitLabel: PropTypes.string,
	wrapperClass: PropTypes.string
};

Form.defaultProps = {
	ariaLabel: 'form',
	error: { error: false, message: '' },
	form: '',
	formWidth: {
		lg: 6,
		md: 8,
		sm: 20,
		span: 6,
		xl: 6,
		xs: 20
	},
	initialValues: {},
	labelAlign: 'left',
	layout: 'vertical',
	loading: false,
	name: 'form',
	onError: () => { },
	onReset: () => { },
	submitIcon: null,
	submitLabel: 'Submit',
	wrapperClass: ''
};

export default Form;
