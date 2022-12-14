import React, { lazy } from 'react';
import {
	UsergroupAddOutlined,
	SearchOutlined,
	HomeFilled,
	MenuUnfoldOutlined,
	ProfileOutlined,
	VideoCameraAddOutlined,
	UserOutlined,
	LogoutOutlined
} from '@ant-design/icons';
import Atoms from '../components/atoms';

import { getValueFromStorage } from '../utils';

const Home = lazy(() => import('../pages/home'));
const WatchList = lazy(() => import('../pages/watchList'));
const WatchParty = lazy(() => import('../pages/watchParty'));
const SearchMovie = lazy(() => import('../pages/searchMovie'));
const PlayerScreen = lazy(() => import('../pages/playerScreen'));
const DetailScreen = lazy(() => import('../pages/detailScreen'));
const MoreLikeThis = lazy(() => import('../pages/moreLikeThis'));
const LatestOnXplay = lazy(() => import('../pages/latestOnXplay'));
const FeaturedMovies = lazy(() => import('../pages/featuredMovies'));
const JoinWatchParty = lazy(() => import('../pages/joinWatchParty'));

const tokens = getValueFromStorage('okta-token-storage');
const userName = tokens?.idToken?.claims?.name || 'Test User';

const ROUTES = {
	HOME: '/home',
	LOGIN: '/login',
	SIGN_UP: '/signup',
	LOGIN_REDIRECT_PATH:
		process.env.REACT_APP_OKTA_CALLBACK_ROUTE ?? '/login/callback'
};

const SECURED_ROUTES = [
	{
		component: Home,
		exact: true,
		icon: <HomeFilled />,
		mobile: {
			sequence: 1,
			showOnTabBar: true
		},
		path: '/home',
		sequence: 2,
		showOnMenubar: true,
		title: 'Home'
	},
	{
		component: FeaturedMovies,
		exact: true,
		icon: <VideoCameraAddOutlined />,
		mobile: {
			sequence: 4,
			showOnTabBar: true,
			title: 'Featured'
		},
		path: '/featuredMovies',
		sequence: 5,
		showOnMenubar: true,
		title: 'Featured Movies'
	},
	{
		component: LatestOnXplay,
		exact: true,
		icon: <ProfileOutlined />,
		mobile: {
			sequence: 3,
			showOnTabBar: true,
			title: 'Latest'
		},
		path: '/latestOnXplay',
		sequence: 4,
		showOnMenubar: true,
		title: 'Latest on XPlay'
	},
	{
		component: MoreLikeThis,
		exact: true,
		path: '/moreLikeThis/:genre?',
		showOnMenubar: false,
		title: 'More Like This'
	},
	{
		component: DetailScreen,
		exact: true,
		path: '/detailScreen/:id?',
		showOnMenubar: false,
		title: 'Movie details'
	},
	{
		component: WatchParty,
		exact: true,
		path: '/watchParty/:id?',
		showOnMenubar: false,
		title: 'Watch Party'
	},
	{
		component: PlayerScreen,
		exact: true,
		path: '/playerScreen/:id?/:partyId?',
		showOnMenubar: false,
		title: 'Movie details'
	},
	{
		component: SearchMovie,
		exact: true,
		icon: <SearchOutlined />,
		path: '/searchMovie',
		sequence: 1,
		showOnMenubar: true,
		title: 'Search Movie'
	},
	{
		component: WatchList,
		exact: true,
		icon: <MenuUnfoldOutlined />,
		mobile: {
			sequence: 2,
			showOnTabBar: true,
			title: 'Watchlist'
		},
		path: '/watchList',
		sequence: 3,
		showOnMenubar: true,
		title: 'Watch List'
	},
	{
		component: JoinWatchParty,
		exact: true,
		icon: <UsergroupAddOutlined />,
		mobile: {
			sequence: 1,
			showOnMenuBar: true
		},
		path: '/joinWatchParty',
		sequence: 6,
		showOnMenubar: true,
		title: 'Join Watch Party'
	},
	{
		icon: <Atoms.Divider />,
		menubarOnly: true,
		mobile: {
			sequence: 2,
			showOnMenuBar: true
		},
		path: '',
		sequence: 7,
		showOnMenubar: true,
		title: ''
	},
	{
		icon: <UserOutlined />,
		menubarOnly: true,
		mobile: {
			sequence: 3,
			showOnMenuBar: true
		},
		path: '',
		sequence: 8,
		showOnMenubar: true,
		title: userName
	},
	{
		icon: <LogoutOutlined />,
		menubarOnly: true,
		mobile: {
			sequence: 4,
			showOnMenuBar: true
		},
		path: 'logout',
		sequence: 9,
		showOnMenubar: true,
		title: 'Logout'
	}
];

export { ROUTES, SECURED_ROUTES };
