import React, { useContext } from 'react';
import { Col, Row, Typography } from 'antd';
import Context from '../../../context';
import styles from './story.module.scss';

const Story = () => {
	const isMobile = useContext(Context.DeviceContext);

	return (
		<>
			{(isMobile || !isMobile) && (
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
						<Typography.Paragraph>
							A Mythic and emotionally charged hero journey, Dune
							tells the story of Paul Atrides, a brilliant and
							gifted young man born into a great destiny beyond
							his understanding, who must travel to the most
							dangerous planet in the universe to ensure the
							future of his family and his people...
						</Typography.Paragraph>
					</Col>
				</Row>
			)}

			{(isMobile || !isMobile) && (
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
			)}
			{(isMobile || !isMobile) && (
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
			)}
			{(isMobile || !isMobile) && (
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
							Lorem ipsum(Black Widow), sit amet(Wolverine),
							Tushar(XMan), Suresh(SpiderMan)
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
							Suresh Kumar
						</Typography>
					</Col>
				</Row>
			)}
			{(isMobile || !isMobile) && (
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
			)}
		</>
	);
};

export default Story;
