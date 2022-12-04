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
	showTitleOnAllScreens,
	title
}) => {
	const isMobile = useContext(Context.DeviceContext);

	return (
		<Content>
			{((isMobile && isSlider) || !isMobile || showTitleOnAllScreens) && !!movieList.length && (
				<Row className={styles.titleRow}>
					<Col
						lg={22}
						md={22}
						sm={22}
						xl={22}
						xs={20}
						xxl={22}>
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
							lg={2}
							md={2}
							sm={2}
							xl={2}
							xs={4}
							xxl={2}>
							<Typography.Link onClick={onLinkClick}>
								See all
							</Typography.Link>
						</Col>
					)}
				</Row>
			)}
			{isSlider ? (
				<Carousel {...carouselSettings} key={Date.now()}>
					{movieList?.map((movie, index) => (
						<Molecules.Card
							coverImage={{
								alt: movie?.title,
								source: movie?.thumbnails?.[0]
									?? movie?.coverImageUrl
							}}
							key={index}
							onClick={() => onMovieClick(movie?._id)}
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
									alt: movie?.title,
									source: movie?.thumbnails?.[0]
										?? movie?.coverImageUrl
								}}
								onClick={() => onMovieClick(movie?._id)}
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
	showTitleOnAllScreens: PropTypes.bool,
	title: PropTypes.string.isRequired
};

MovieList.defaultProps = {
	isSlider: false,
	onLinkClick: () => false,
	onMovieClick: () => false,
	showTitleOnAllScreens: false,
	movieList: []
};

export default MovieList;
