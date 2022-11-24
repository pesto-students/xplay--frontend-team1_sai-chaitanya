import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Input } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import Organisms from '../../organisms';

const { Search } = Input;

function SearchBarWithResults({ movieList, title }) {
	return (
		<Content>
			<div className="site-layout-background">
				<Typography.Title
					level={3}
					style={{
						margin: '1.2rem'
					}}>
					{title}
				</Typography.Title>

				<Search
					placeholder="Enter Movie Title"
					style={{
						width: 200
					}}
				/>
				<div className="site-card-wrapper">
					<Organisms.MovieList movieList={movieList} />
				</div>
			</div>
		</Content>
	);
}

SearchBarWithResults.propTypes = {
	movieList: PropTypes.array,
	title: PropTypes.string
};

SearchBarWithResults.defaultProps = {
	movieList: [],
	title: 'Search for a movie'
};

export default SearchBarWithResults;
