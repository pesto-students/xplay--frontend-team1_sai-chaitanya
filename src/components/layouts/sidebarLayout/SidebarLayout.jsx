import React, { useState } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { Content } from 'antd/lib/layout/layout';

import Organisms from '../../organisms';
import styles from './sidebarLayout.module.scss';

const SidebarLayout = ({ children }) => {
	const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

	const handleToggleSidebar = (value) => {
		setSidebarCollapsed(value);
	};

	return (
		<Layout>
			<Organisms.Sidebar onToggleSidebar={handleToggleSidebar} />
			<Layout>
				<Content
					className={styles.content}
					style={{
						marginLeft: sidebarCollapsed ? '4rem' : '12.4rem'
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
