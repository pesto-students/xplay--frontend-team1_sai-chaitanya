import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form as AntdForm, Row, Typography } from 'antd';

import styles from './form.module.scss';

const Form = ({
	ariaLabel,
	children,
	error,
	id,
	labelAlign,
	layout,
	loading,
	name,
	onError,
	onReset,
	onSubmit,
	submitLabel
}) => {
	return (
		<Row justify="center">
			<Col lg={6} md={8} sm={12} span={6} xl={6} xs={12}>
				<AntdForm
					aria-label={ariaLabel}
					autoComplete="off"
					initialValues={{
						remember: true
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
	children: PropTypes.array.isRequired,
	error: PropTypes.shape({ error: PropTypes.bool, message: PropTypes.string }),
	id: PropTypes.string.isRequired,
	labelAlign: PropTypes.oneOf(['left', 'right']),
	layout: PropTypes.oneOf(['inline', 'horizontal', 'vertical']),
	loading: PropTypes.bool,
	name: PropTypes.string,
	onError: PropTypes.func,
	onReset: PropTypes.func,
	onSubmit: PropTypes.func.isRequired,
	submitLabel: PropTypes.string
};

Form.defaultProps = {
	ariaLabel: 'form',
	error: { error: false, message: '' },
	labelAlign: 'left',
	layout: 'vertical',
	loading: false,
	name: 'form',
	onError: () => {},
	onReset: () => {},
	submitLabel: 'Submit'
};

export default Form;
