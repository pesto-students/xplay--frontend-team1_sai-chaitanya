import React from 'react';

import Atoms from '../../atoms';
import styles from './movieList.module.scss';

const carouselSettings = {
	arrows: true,
	className: styles.xpCarousel,
	dots: false,
	infinite: false,
	initialSlide: 0,
	nextArrow: <Atoms.MovieListArrowRight />,
	prevArrow: <Atoms.MovieListArrowLeft />,
	responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
	]
};

export default carouselSettings;
