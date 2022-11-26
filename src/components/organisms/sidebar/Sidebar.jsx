import React, { useContext } from 'react';
import { useState } from 'react';
import { Image, Menu } from 'antd';
import PropTypes from 'prop-types';
import Sider from 'antd/lib/layout/Sider';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

import Context from '../../../context';
import styles from './sidebar.module.scss';
import { SECURED_ROUTES } from '../../../constants';

const getMenuItem = (obj) => {
	const { icon, path, sequence, title } = obj;
	return {
		key: sequence,
		icon: icon,
		label: title,
		path: path,
		style: !path
			? {
					marginTop: '2rem',
					paddingBottom: '1.2rem',
					paddingTop: '2.8rem',
					borderTop: '1px solid'
			  }
			: {}
	};
};

const menuList = SECURED_ROUTES?.filter((menu) => menu?.showOnMenubar)
	?.sort((current, next) => (current?.sequence < next?.sequence ? -1 : 1))
	?.map(getMenuItem);

const Sidebar = ({ onToggleSidebar }) => {
	const history = useHistory();
	const { authState, oktaAuth } = useOktaAuth();
	const [collapsed, setCollapsed] = useState(false);
	const isMobile = useContext(Context.DeviceContext);

	if (!authState) return null;

	const handleNavigation = (key) => {
		const path = menuList?.find((menu) => menu?.key == key)?.path;
		if (path == 'logout') logOutRedirect();
		else if (path) history.push(path);
	};

	const handleToggleSidebar = (value) => {
		onToggleSidebar(value);
		setCollapsed(value);
	};

	const logOutRedirect = async () => await oktaAuth.signOut();

	return (
		<Sider
			className={styles.sidebar}
			collapsible
			collapsed={collapsed}
			collapsedWidth={isMobile ? 0 : '4rem'}
			onCollapse={(value) => handleToggleSidebar(value)}
			defaultCollapsed>
			<div className={styles.logoContainer}>
				{collapsed ? (
					<Image
						className={styles.logo}
						height={48}
						preview={false}
						src="assets/images/favicon_xplay_black.jpg"
						width={48}
					/>
				) : (
					<Image
						className={styles.logo}
						height={48}
						preview={false}
						src="assets/images/xplay_logo_black.jpg"
						width={168}
					/>
				)}
			</div>
			<Menu
				theme="dark"
				defaultSelectedKeys={['2']}
				mode="inline"
				items={menuList}
				className={styles.menu}
				onSelect={({ key }) => handleNavigation(key)}
			/>
		</Sider>
	);
};

Sidebar.propTypes = {
	onToggleSidebar: PropTypes.func
};

Sidebar.defaultProps = {
	onToggleSidebar: () => {}
};

export default Sidebar;