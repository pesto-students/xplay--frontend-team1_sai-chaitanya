import React, { useState } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { Content } from 'antd/lib/layout/layout';

import Organisms from '../../organisms';
import styles from './sidebarLayout.module.scss';

const SidebarLayout = ({ children }) => {
	const [sidebarExpanded, setSidebarExpanded] = useState(false);

	const handleToggleSidebar = (value) => {
		setSidebarExpanded(value);
	};

	return (
		<Layout>
			<Organisms.Sidebar onToggleSidebar={handleToggleSidebar} />
			<Layout>
				<Content
					className={styles.content}
					style={{
						marginLeft: sidebarExpanded ? '4.8rem' : '13.2rem'
					}}>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
};

SidebarLayout.propTypes = {
	children: PropTypes.node.isRequired
};

export default SidebarLayout;
