import React, { useEffect, useState } from 'react';
import { Col, Image, Row, Tabs } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from 'react-router-dom';

import styles from './tabBar.module.scss';
import { SECURED_ROUTES } from '../../../constants';

const getMenuItem = (obj) => {
	const { icon, path, mobile, title } = obj;
	const { title: mobileTitle } = mobile;
	return {
		key: title,
		icon: icon,
		label: mobileTitle ?? title,
		path: path
	};
};

const menuList = SECURED_ROUTES?.filter((menu) => menu?.mobile?.showOnTabBar)
	?.sort((current, next) =>
		current?.mobile?.sequence < next?.mobile?.sequence ? -1 : 1
	)
	?.map(getMenuItem);

const TabBar = () => {
	const history = useHistory();
	const location = useLocation();
	const [selectedMenu, setSelectedMenu] = useState(null);

	useEffect(() => {
		const menuKey = menuList.find(
			(menu) => menu?.path === location.pathname
		)?.key;
		setSelectedMenu(menuKey ?? null);
	}, [location]);

	const handleNavigation = (key) => {
		const path = menuList?.find((menu) => menu?.key == key)?.path;
		history.push(path);
	};

	return (
		<Header className={styles.header}>
			<Row className={styles.logoContainer}>
				<Col
					className={styles.centered}
					lg={16}
					md={16}
					offset={4}
					sm={16}
					xl={16}
					xs={16}
					xxl={16}>
					<Image
						className={styles.logo}
						height={48}
						preview={false}
						src="assets/images/xplay_logo_black.jpg"
						width={168}
					/>
				</Col>
				<Col
					className={styles.centered}
					lg={4}
					md={4}
					sm={4}
					xl={4}
					xs={4}
					xxl={4}>
					<SearchOutlined 
					className={styles.menuIcon}
					onClick={() => history.push('/searchMovie')} />
				</Col>
			</Row>
			<Tabs
				activeKey={selectedMenu}
				className={styles.tabContainer}
				defaultActiveKey={selectedMenu}
				tabPosition="top"
				items={menuList}
				onChange={(key) => handleNavigation(key)}
			/>
		</Header>
	);
};

export default TabBar;
