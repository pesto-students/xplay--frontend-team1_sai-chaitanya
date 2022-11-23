import React from 'react';
import { Col, Image, Row, Tabs } from 'antd';
import { useHistory } from 'react-router-dom';
import { Header } from 'antd/lib/layout/layout';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';

import styles from './tabBar.module.scss';
import { SECURED_ROUTES } from '../../../constants';

const getMenuItem = (obj) => {
	const { icon, path, mobile, title } = obj;
	const { sequence, title: mobileTitle } = mobile;
	return {
		key: sequence,
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

	const handleNavigation = (key) => {
		const path = menuList?.find((menu) => menu?.key == key)?.path;
		history.push(path);
	};

	return (
		<>
			<Header className={styles.header}>
				<Row className={styles.logoContainer}>
					<Col
						className={styles.centered}
						lg={4}
						md={4}
						sm={4}
						xl={4}
						xs={4}
						xxl={4}>
						<MenuOutlined className={styles.menuIcon} />
					</Col>
					<Col
						className={styles.centered}
						lg={16}
						md={16}
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
						<SearchOutlined className={styles.menuIcon} />
					</Col>
				</Row>
				<Tabs
					className={styles.tabContainer}
					defaultActiveKey="1"
					tabPosition="top"
					items={menuList}
					onChange={(key) => handleNavigation(key)}
				/>
			</Header>
		</>
	);
};

export default TabBar;
