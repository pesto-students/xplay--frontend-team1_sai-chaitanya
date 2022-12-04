import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'antd/lib/form/Form';
import { Button, Col, Row, Typography, Layout } from 'antd';

import Form from '../form';
import context from '../../../context';
import Molecules from '../../molecules';
import styles from './watchPartyContent.module.scss';

const { Content } = Layout;

const WatchPartyContent = ({
	actions,
	loading,
	movie,
	otp,
	onCreateWatchParty
}) => {
	const [form] = useForm();
	const isMobile = useContext(context.DeviceContext);

	const handleInputChange = (e) => {
		if (!e?.target?.value) {
			form.resetFields();
		}
	};

	const handleSubmit = (formData) => {
		onCreateWatchParty(formData?.watchPartyName);
	};

	return (
		<Content>
			<Row className={[
				styles.container,
				isMobile && styles.mobileContainer
			].filter(Boolean)}>
				<Col
					className={
						styles[isMobile
							? 'infoContainerMobile'
							: 'infoContainer']
					}
					lg={18}
					md={18}
					sm={24}
					xl={18}
					xs={24}
					xxl={18}>
					<Row>
						<Col
							className={styles.infoCol}
							lg={16}
							md={16}
							sm={24}
							xl={16}
							xs={24}
							xxl={16}>
							<Typography.Text
								className={styles.movieCoverTagline}
								strong>
								Create Watch Party
							</Typography.Text>
							<Typography.Title
								className={styles.movieCoverTitle}
								level={3}>
								{movie?.title}
							</Typography.Title>
						</Col>
						<Col
							className={styles.infoColImage}
							lg={8}
							md={8}
							sm={24}
							xl={8}
							xs={24}
							xxl={8}>
							<Molecules.Card
								coverImage={{
									alt: movie?.title,
									source: movie?.thumbnails?.[0]
										?? movie?.coverImageUrl
								}}
								onClick={() => { }}
							/>
						</Col>
					</Row>
				</Col>

				<Col
					className={isMobile ? '' : styles.sidebar}
					lg={6}
					md={6}
					sm={24}
					xl={6}
					xs={24}
					xxl={6}>

					<Content
						className={styles.sidebarContent}>
						<Typography.Title level={3}>
							Let&#39;s get the Party Started
						</Typography.Title>

						<Typography.Paragraph level={6}>
							{otp
								? 'Share the following passcode with your friends/ family and ask them to join using it'
								: 'Watch with your friends and family'
							}
						</Typography.Paragraph>

						{!otp ? <Typography.Paragraph level={6}>
							Everyone must be a user on XPlay
						</Typography.Paragraph> : null}

						{!otp ? <Form
							ariaLabel="Create Watch Party"
							form={form}
							formWidth={{
								span: 24
							}}
							id="create-watch-party-form"
							loading={loading}
							name="create-watch-party-form"
							onSubmit={handleSubmit}
							submitLabel="Create Watch Party"
							wrapperClass={styles.form}>
							<Molecules.FormField
								id="watchPartyName"
								name="watchPartyName"
								placeholder="Name your Watch Party"
								onChange={handleInputChange}
								rules={[{
									required: true,
									message: `Please name your watch party!`
								}]}
							/>
						</Form> : null}

						<Typography.Title
							className={styles.otp}
							level={3}
						>
							{otp}
						</Typography.Title>

						{otp ? <Row className={styles.partyActions}>
							{actions?.onPlayClick ? <Button
								className={styles.buttonPrimary}
								onClick={actions?.onPlayClick}
								type="primary"
							>
								Play
							</Button> : null}

							{actions?.onPlayLaterClick ? <Button
								className={styles.buttonPrimary}
								onClick={actions?.onPlayLaterClick}
								type="primary"
							>
								Play Later
							</Button> : null}
						</Row> : null}

						<Row className={styles.cancelActions}>
							<Button
								htmlType="button"
								onClick={actions?.onCancelClick}
								type="link">
								Cancel
							</Button>
						</Row>
					</Content>
				</Col>
			</Row>
		</Content>
	);
};

WatchPartyContent.propTypes = {
	actions: PropTypes.object.isRequired,
	loading: PropTypes.bool,
	movie: PropTypes.object.isRequired,
	otp: PropTypes.string,
	onCreateWatchParty: PropTypes.func.isRequired
};

WatchPartyContent.defaultProps = {
	loading: false,
	otp: null
};

export default WatchPartyContent;
