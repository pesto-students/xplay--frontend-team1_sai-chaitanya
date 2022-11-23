import React from 'react';
import { Col, Image, Row, Space } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import styles from './publicHeader.module.scss';

const PublicHeader = () => {
	const pathname = useLocation().pathname;

	return (
		<Space
			align="center"
			className={styles?.content}
			direction="vertical">
			<Image
				height={56}
				preview={false}
				src="assets/images/xplay_logo_black.jpg"
				width={168}
			/>
			<Row
				gutter={32}
				className={styles?.buttons}>
				<Col>
					<Link
						className={`${styles?.link} ${
							pathname === '/login'
								? styles?.active
								: styles?.inactive
						}`}
						to={'/login'}>
						Login
					</Link>
				</Col>

				<Col>
					<Link
						className={`${styles?.link} ${
							pathname === '/signup'
								? styles?.active
								: styles?.inactive
						}`}
						to={'/signup'}>
						Sign Up
					</Link>
				</Col>
			</Row>
		</Space>
	);
};

export default PublicHeader;
