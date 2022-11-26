import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Typography } from 'antd';

import Context from '../../../context';
import styles from './movieDetailsContent.module.scss';

const MovieDetailsContent = ({ castDetails, directorDetails, story }) => {
	const isMobile = useContext(Context.DeviceContext);

	return (
		<>
			<Row className={styles.titleRow}>
				<Col
					lg={23}
					md={20}
					sm={20}
					xl={23}
					xs={20}
					xxl={23}>
					<Typography.Title
						level={5}
						style={{
							color: '#FF7732'
						}}>
						Storyline
					</Typography.Title>
				</Col>

				<Col
					lg={27}
					md={25}
					sm={30}
					xl={28}
					xs={23}
					xxl={25}>
					<Typography.Paragraph>{story}</Typography.Paragraph>
				</Col>
			</Row>

			<Row className={styles.castRow}>
				<Col
					lg={29}
					md={28}
					sm={28}
					xl={28}
					xs={23}
					xxl={23}>
					<hr></hr>
				</Col>
			</Row>

			<Row className={styles.title2Row}>
				<Col
					lg={23}
					md={20}
					sm={20}
					xl={23}
					xs={20}
					xxl={23}>
					<Typography.Title
						level={5}
						style={{
							color: '#FF7732'
						}}>
						Movie Details
					</Typography.Title>
				</Col>
			</Row>

			<Row className={styles.castRow}>
				<Col
					lg={29}
					md={30}
					sm={29}
					xl={23}
					xs={23}
					xxl={23}>
					<Typography>Cast</Typography>
					<Typography
						style={{
							marginLeft: isMobile ? '10.6rem' : '26.6rem',
							marginTop: '-1.2rem'
						}}>
						{castDetails}
					</Typography>
				</Col>

				<Col
					className={styles.detail}
					lg={29}
					md={26}
					sm={21}
					style={{ marginTop: '0.5rem' }}
					xl={23}
					xs={20}
					xxl={23}>
					<Typography>Director</Typography>
					<Typography
						style={{
							marginLeft: isMobile ? '7.5rem' : '23.5rem'
						}}>
						{directorDetails}
					</Typography>
				</Col>
			</Row>

			<Row className={styles.castRow}>
				<Col
					lg={29}
					md={30}
					sm={29}
					xl={28}
					xs={23}
					xxl={23}>
					<hr
						style={{
							marginTop: '1.2rem'
						}}></hr>
				</Col>
			</Row>
		</>
	);
};

MovieDetailsContent.propTypes = {
	castDetails: PropTypes.string.isRequired,
	directorDetails: PropTypes.string.isRequired,
	story: PropTypes.string.isRequired
};

export default MovieDetailsContent;
