import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';
import { Button, Col, Input, Image, Row, Typography } from 'antd';

import Context from '../../../context';
import styles from './watchPartyContent.module.scss';
import MovieImg from '../../../assets/images/second.png';
import background from '../../../assets/images/second.png';

const WatchPartyContent = ({ movieName }) => {
	const isMobile = useContext(Context.DeviceContext);

	return (
		<>
			<div className={styles.main}>
				<Col flex={7}>
					<div
						style={{
							backgroundImage: `url(${background})`,
							height: isMobile ? '49.5rem' : '45rem',
							opacity: isMobile ? '0.5' : '0.04'
						}}></div>
					<Row className={styles.content}>
						<Col
							className={styles.party}
							lg={20}
							md={25}
							sm={25}
							xl={23}
							xs={28}
							xxl={30}>
							<h6 className={styles.header}>
								Create Watch Party
							</h6>
							<h1 className={styles.name}>{movieName}</h1>
						</Col>

						<Col
							lg={12}
							md={12}
							sm={14}
							xl={10}
							xs={23}
							xxl={20}>
							<AntdCard
								bodyStyle={{ padding: 0, marginRight: '1rem' }}
								hoverable
								cover={
									<Image
										className={styles.imgfix}
										src={MovieImg}
									/>
								}></AntdCard>
						</Col>
					</Row>
				</Col>
				<Row className={styles.rightchild}>
					<Col flex={3}>
						<Col
							className={styles.code}
							lg={29}
							md={20}
							sm={25}
							xl={28}
							xs={28}
							xxl={23}>
							<Typography.Title level={3}>
								Let's get the Party Started
							</Typography.Title>

							<Typography.Paragraph level={4}>
								Watch with your friends and family.
							</Typography.Paragraph>

							<Typography.Paragraph level={6}>
								Everyone must have Code or have purchased a
								video.
							</Typography.Paragraph>

							<Typography
								style={{
									marginRight: 'auto',
									fontSize: '1rem'
								}}>
								Chat name:
							</Typography>

							<Input
								placeholder="Enter Name"
								style={{
									border: ' 0.025rem solid grey'
								}}
							/>

							<Typography
								style={{
									marginRight: 'auto',
									fontSize: '1rem',
									marginTop: '1rem'
								}}>
								Chat OTP:
							</Typography>

							<Input
								placeholder="Enter OTP"
								style={{
									border: ' 0.025rem solid grey'
								}}
							/>

							<Button
								type="primary"
								style={{
									marginTop: '0.3125rem'
								}}>
								Create Watch Party
							</Button>
							<div className={styles.playmode}>
								<Button
									type="primary"
									style={{
										marginTop: '0.3125rem',
										background: '#FF671A',
										marginRight: '1.2rem',
										width: '5.2rem'
									}}>
									Play
								</Button>
								<Button
									type="primary"
									style={{
										marginTop: '0.3125rem',
										background: '#FF671A'
									}}>
									Play Later
								</Button>
							</div>

							<Typography.Link
								style={{
									marginTop: '0.4rem',
									marginLeft: 'auto',
									marginRight: 'auto'
								}}>
								Cancel
							</Typography.Link>

							<Typography.Paragraph
								level={6}
								style={{
									marginTop: '6.7rem'
								}}>
								By viewing, you agree to our Terms of use and
								our Watch Party Guidelines.
							</Typography.Paragraph>
						</Col>
					</Col>
				</Row>
			</div>
		</>
	);
};

WatchPartyContent.propTypes = {
	movieName: PropTypes.string.isRequired
};

export default WatchPartyContent;
