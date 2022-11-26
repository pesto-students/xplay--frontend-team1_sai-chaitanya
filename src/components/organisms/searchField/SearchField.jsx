import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Content } from 'antd/lib/layout/layout';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Col,Input, Row, Typography } from 'antd';

import Context from '../../../context';
import Molecules from '../../molecules';
import styles from './searchField.module.scss';

function SearchField({ movieList, title, result }) {
	const isMobile = useContext(Context.DeviceContext);
	return (
		<Content>
			<div className="site-layout-background">
				<Typography.Title
					level={3}
					style={{
						margin: '0.8rem'
					}}>
					{title}
				</Typography.Title>
				<div className={styles.searchRow}>
					<Input
						placeholder="Enter Movie Title"
						style={{
							width: isMobile? '15.6rem' : '28.1rem',
							height:'1.8rem',
			                borderRadius:'0.4rem',
							backgroundColor:'grey'
						}}
					/>
					<Button type="primary"
					icon={<SearchOutlined />}
					style={{
						width: '6.25rem',
						height:'1.8rem',
						borderRadius:'0.4rem',
						backgroundColor:'#FF6212',
						marginLeft:'1.0rem',
						border:'none',
						color:'black'
					}}
					>Search</Button>
			</div>
				<Typography.Title
					level={3}
					style={{
						margin: '0.8rem'
					}}>
					{result}
				</Typography.Title>
            <div className="site-card-wrapper">
					<Row>
						{movieList?.map((movie, index) => (
							<Col
								key={index}
								xs={16}
								sm={12}
								md={12}
								lg={8}
								xl={6}
								xxl={4}
								style={{ padding: 0 }}>
								<Molecules.Card
									coverImage={{
										alt: movie?.alt,
										source: movie?.source
									}}
									key={index}
									onClick={() => false}
								/>
							</Col>
						))}
					</Row>
				</div>
			</div>
		</Content>
	);
}

SearchField.propTypes = {
	movieList: PropTypes.array,
	result: PropTypes.string,
	title: PropTypes.string
};

SearchField.defaultProps = {
	movieList: [],
	result: 'Results',
	title: 'Search for a movie'
};

export default SearchField;
