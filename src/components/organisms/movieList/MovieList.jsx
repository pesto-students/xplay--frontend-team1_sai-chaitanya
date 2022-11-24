import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Content } from 'antd/lib/layout/layout';
import { Carousel, Col, Row, Typography } from 'antd';

import Context from '../../../context';
import Molecules from '../../molecules';
import styles from './movieList.module.scss';
import carouselSettings from './carousel.config';

const MovieList = ({
	isSlider,
	movieList,
	onLinkClick,
	onMovieClick,
	title
}) => {
	const isMobile = useContext(Context.DeviceContext);

	return (
		<Content>
			{((isMobile && isSlider) || !isMobile) && (
				<Row className={styles.titleRow}>
					<Col
						lg={23}
						md={20}
						sm={20}
						xl={23}
						xs={20}
						xxl={23}>
						<Typography.Title
							className={styles.movieListTitle}
							level={isSlider ? 5 : 4}
							style={{
								color: isSlider ? '#FF7732' : '#FFF'
							}}>
							{title}
						</Typography.Title>
					</Col>
					{isSlider && (
						<Col
							lg={1}
							md={4}
							sm={4}
							xl={1}
							xs={4}
							xxl={1}>
							<Typography.Link onClick={onLinkClick}>
								See all
							</Typography.Link>
						</Col>
					)}
				</Row>
			)}
			{isSlider ? (
				<Carousel {...carouselSettings}>
					{movieList?.map((movie, index) => (
						<Molecules.Card
							coverImage={{
								alt: movie?.name,
								source: movie?.imageSource
							}}
							key={index}
							onClick={() => onMovieClick(movie?.movieId)}
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
							xs={12}
							xxl={4}>
							<Molecules.Card
								coverImage={{
									alt: movie?.name,
									source: movie?.imageSource
								}}
								onClick={() => onMovieClick(movie?.movieId)}
							/>
						</Col>
					))}
				</Row>
			)}
		</Content>
	);
};

MovieList.propTypes = {
	isSlider: PropTypes.bool,
	movieList: PropTypes.array,
	onLinkClick: PropTypes.func,
	onMovieClick: PropTypes.func,
	title: PropTypes.string.isRequired
};

MovieList.defaultProps = {
	isSlider: false,
	onLinkClick: () => false,
	onMovieClick: () => false,
	movieList: []
};

export default MovieList;
