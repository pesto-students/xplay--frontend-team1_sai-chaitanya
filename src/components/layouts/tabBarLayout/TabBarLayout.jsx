import React from 'react';
import PropTypes from 'prop-types';
import Layout, { Content } from 'antd/lib/layout/layout';

import Organisms from '../../organisms';
import styles from './tabBarLayout.module.scss';

const TabBarLayout = ({ children }) => {
	return (
		<Layout>
			<Organisms.TabBar />
			<Layout>
				<Content className={styles.content}>{children}</Content>
			</Layout>
		</Layout>
	);
};

TabBarLayout.propTypes = {
	children: PropTypes.node.isRequired
};

export default TabBarLayout;
