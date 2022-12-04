import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';
import { Button, Col, Input, Image, Row, Typography, Layout } from 'antd';

import context from '../../../context';
import styles from './watchPartyContent.module.scss';
import MovieImg from '../../../assets/images/second.png';

const { Sider, Content } = Layout;
const WatchPartyContent = ({ movieName }) => {
	const isMobile = useContext(context.DeviceContext);
	const [isShown, setIsShown] = useState(false);
	const handleClick = () => setIsShown((current) => !current);

	return (
		<>
			<Content>
				<Row>
					<Col
						lg={18}
						md={18}
						sm={24}
						xl={18}
						xs={24}
						xxl={18}>
						<div
							className={
								styles[isMobile ? 'bgImagemob' : 'bgImage']
							}></div>
						<div className={styles.content}>
							<div
								className={
									styles[isMobile ? 'partymob' : 'party']
								}>
								<h4 className={styles.header}>
									Create Watch Party
								</h4>
								<h1 className={styles.name}>{movieName}</h1>
							</div>

							<div
								className={
									styles[
										isMobile
											? 'cardDesignmob'
											: 'cardDesign'
									]
								}>
								<AntdCard
									bodyStyle={{
										padding: 0
									}}
									hoverable
									cover={<Image src={MovieImg} />}></AntdCard>
							</div>
						</div>
					</Col>

					<Col
						lg={6}
						md={6}
						sm={24}
						xl={6}
						xs={24}
						xxl={6}>
						<Sider
							width={'auto'}
							className={
								styles[isMobile ? 'menustylemob' : 'menustyle']
							}>
							<div
								className={
									styles[isMobile ? 'codemob' : 'code']
								}>
								<Typography.Title level={3}>
									Let&#39;s get the Party Started
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
									Watch Party name:
								</Typography>

								<Input
									placeholder="Enter Name"
									style={{
										border: ' 0.025rem solid grey'
									}}
								/>

								<Input
									placeholder="OTP"
									style={{
										border: ' 0.025rem solid grey',
										marginTop: '1rem'
									}}
								/>

								<Button
									type="primary"
									style={{
										marginTop: '1rem'
									}}
									onClick={handleClick}>
									Create Watch Party
								</Button>

								{isShown && (
									<div className={styles.playmode}>
										<Button
											type="primary"
											className={styles.playbtn}>
											Play
										</Button>

										<Button
											type="primary"
											className={styles.playlaterbtn}>
											Play Later
										</Button>
									</div>
								)}

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
									className={
										styles[
											isMobile
												? 'parawarnmob'
												: 'parawarn'
										]
									}>
									By viewing, you agree to our Terms of use
									and our Watch Party Guidelines.
								</Typography.Paragraph>
							</div>
						</Sider>
					</Col>
				</Row>
			</Content>
		</>
	);
};

WatchPartyContent.propTypes = {
	actions: PropTypes.object.isRequired,
	movieName: PropTypes.string.isRequired,
	OnCreateWatchParty: PropTypes.func.isRequired
};

export default WatchPartyContent;
