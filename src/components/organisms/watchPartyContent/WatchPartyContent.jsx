import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';
import { Button, Col, Input, Row, Typography } from 'antd';

import Context from '../../../context';
import styles from './watchPartyContent.module.scss';
import MovieImg from '../../../assets/images/second.png';
import background from '../../../assets/images/second.png';

const WatchPartyContent = ({ movieName }) => {
	const isMobile = useContext(Context.DeviceContext);

	return (
		<>
			<div className={styles.main}
				style={{
					height: isMobile ? '44rem' : '45rem'
				}}>

				<div style={{
						width: isMobile ? '55rem' : '80rem',
						height: isMobile ? '49.5rem' : '45rem'
					}}>
					<div
						style={{
							backgroundImage: `url(${background})`,
							height: isMobile ? '49.5rem' : '45rem',
							opacity: isMobile ? '0.5' : '0.04'
						}}>
                        </div>
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
							<h1 className={styles.name}>
								{movieName}
							</h1>
						</Col>

						<Col
							lg={25}
							md={25}
							sm={20}
							xl={21}
							xs={20}
							xxl={30}>
							<AntdCard
								bodyStyle={{ padding: 0 }}
								hoverable
								style={{
									width: 240,
									borderRadius: '0.8rem',
									marginLeft: 'auto',
									marginTop: 'auto'
								}}
								cover={
									<img
										alt="example"
										src={MovieImg}
										style={{
											borderRadius: '0.8rem'
										}}
									/>
								}>
                              </AntdCard>
						</Col>
					</Row>
				</div>
				<Row className={styles.rightchild}
					style={{
						width: isMobile ? '45rem' : '20rem',
						height: isMobile ? '49.5rem' : '45rem'
					}}>
					<Col className={styles.code}
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
							Watch and Chat with your friends and family.
						</Typography.Paragraph>

						<Typography.Paragraph level={4}>
							Everyone must have Code or have purchased a video.
						</Typography.Paragraph>

						<label
							style={{
								marginRight: 'auto'
							}}>
							Chat name:
						</label>

						<Input
							placeholder="Enter Name"
							style={{
								border: ' 0.125rem solid white'
							}}
						/>

						<Button
							type="primary"
							style={{
								marginTop: '0.3125rem'
							}}>
							Create Watch Party
						</Button>

						<Typography.Link
							style={{
								marginTop: '0.4rem'
							}}>
							Cancel
						</Typography.Link>
                        
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
