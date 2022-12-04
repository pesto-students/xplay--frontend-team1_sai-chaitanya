import React from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';
import { Button, Col, Input, Image, Row, Typography } from 'antd';

import styles from './watchPartyContent.module.scss';
import MovieImg from '../../../assets/images/second.png';

const WatchPartyContent = ({ actions, movieName, OnCreateWatchParty }) => {

	return (
		<>
			<div className={styles.main}>
				<Col flex={7}>
					<div className={styles.bgImage}></div>
					<Row className={styles.content}>
						<Col
							className={styles.party}
							lg={20}
							md={18}
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
							className={styles.cardDesign}
							lg={12}
							md={18}
							sm={19}
							xl={10}
							xs={21}
							xxl={20}>
							<AntdCard
								bodyStyle={{ padding: 0, marginLeft: '-50rem' }}
								hoverable
								cover={<Image src={MovieImg} />}></AntdCard>
						</Col>
					</Row>
				</Col>

				<Row className={styles.rightchild}>
					<Col flex={2}>
						<Col
							className={styles.code}
							lg={29}
							md={18}
							sm={25}
							xl={28}
							xs={15}
							xxl={23}>
							<Typography.Title level={3}>
								{"Let's get the Party Started"}
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
								onClick={OnCreateWatchParty}
								type="primary"
								style={{
									marginTop: '0.3125rem'
								}}>
								Create Watch Party
							</Button>

							<div className={styles.playmode}>
								{actions?.onPlayClick ? <Button
									onClick={actions?.onPlayClick}
									type="primary"
									style={{
										marginTop: '0.3125rem',
										background: '#FF671A',
										marginRight: '1.2rem',
										width: '5.2rem'
									}}>
									Play
								</Button> : null}

								{actions?.onPlayLaterClick ? <Button
									onClick={actions?.onPlayLaterClick}
									type="primary"
									style={{
										marginTop: '0.3125rem',
										background: '#FF671A'
									}}>
									Play Later
								</Button> : null}
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
									marginTop: '3rem'
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
	actions: PropTypes.object.isRequired,
	movieName: PropTypes.string.isRequired,
	OnCreateWatchParty: PropTypes.func.isRequired
};

export default WatchPartyContent;
