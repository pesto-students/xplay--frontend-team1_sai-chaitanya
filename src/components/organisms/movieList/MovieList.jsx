import React from 'react';
import PropTypes from 'prop-types';
import { Content } from 'antd/lib/layout/layout';
import { Carousel, Col, Row, Typography } from 'antd';

import Molecules from '../../molecules';
import styles from './movieList.module.scss';
import carouselSettings from './carousel.config';

const MovieList = ({ isSlider, movieList, title }) => (
	<Content>
		<Row className={styles.titleRow}>
			<Col xs={20} sm={20} md={20} lg={23} xl={23} xxl={23}>
				<Typography.Title
					className={styles.movieListTitle}
					color={isSlider ? '#FF7732' : '#FFF'}
					level={isSlider ? 5 : 2}>
					{title}
				</Typography.Title>
			</Col>
			{isSlider && (
				<Col md={4} lg={1} sm={4} xl={1} xs={4} xxl={1}>
					<Typography.Link>See all</Typography.Link>
				</Col>
			)}
		</Row>
		{isSlider ? (
			<Carousel {...carouselSettings}>
				{movieList?.map((movie, index) => (
					<Molecules.Card
						coverImage={{
							alt: movie?.name,
							source: movie?.imageSource
						}}
						key={index}
						onClick={() => false}
					/>
				))}
			</Carousel>
		) : (
			<Row>
				{movieList?.map((movie, index) => (
					<Col
						key={index}
						lg={8}
						md={12}
						sm={12}
						style={{ padding: 0 }}
						xl={6}
						xs={16}
						xxl={4}>
						<Molecules.Card
							coverImage={{
								alt: movie?.name,
								source: movie?.imageSource
							}}
						/>
					</Col>
				))}
			</Row>
		)}
	</Content>
);

MovieList.propTypes = {
	isSlider: PropTypes.bool,
	movieList: PropTypes.array,
	title: PropTypes.string.isRequired
};

MovieList.defaultProps = {
	isSlider: false,
	movieList: []
};

export default MovieList;
