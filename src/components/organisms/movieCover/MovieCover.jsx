import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Content } from 'antd/lib/layout/layout';
import { Button, Col, Row, Typography } from 'antd';
import { AliyunOutlined, PlayCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

import Context from '../../../context';
import styles from './movieCover.module.scss';

const MovieCover = ({
    isPromotional,
    movieDetails
}) => {
    const isMobile = useContext(Context.DeviceContext);

    return (
        <Content
            className={[styles.container, isMobile && styles.mobileContainer].filter(Boolean)}
            style={{ backgroundImage: `url(${movieDetails?.coverImageUrl})` }}
        >
            <Row>
                <Col
                    lg={12}
                    md={16}
                    sm={24}
                    xl={12}
                    xs={24}
                    xxl={12}>
                    <Typography.Title
                        className={styles.movieCoverTitle}
                        level={3}>
                        {movieDetails?.title}
                    </Typography.Title>
                    <Typography.Text
                        className={styles.movieCoverTagline}
                        strong>
                        {movieDetails?.tagLine}
                    </Typography.Text>
                </Col>
            </Row>
            <Row className={
                [styles.movieCoverInfo,
                !isPromotional && styles.promotionalInfo
                ].filter(Boolean)
            }>
                <Col
                    lg={12}
                    md={16}
                    sm={24}
                    xl={12}
                    xs={24}
                    xxl={12}>
                    <Typography.Text
                        strong>
                        {new Date(movieDetails?.publishedAt).getFullYear()}
                        {' | '} {movieDetails?.genre}
                        {' | '} {movieDetails?.length}
                    </Typography.Text>
                </Col>
            </Row>
            {!isMobile && isPromotional ? (
                <Row>
                    <Col
                        lg={12}
                        md={16}
                        sm={0}
                        xl={12}
                        xs={0}
                        xxl={12}>
                        <Typography.Paragraph
                            className={styles.movieCoverDescription}
                            strong>
                            {movieDetails?.description}
                        </Typography.Paragraph>
                    </Col>
                </Row>)
                : null
            }
            <Row className={styles.movieCoverActions}>
                <Col
                    lg={12}
                    md={24}
                    sm={24}
                    xl={12}
                    xs={24}
                    xxl={12}>
                    <Button
                        className={styles.playButton}
                        htmlType="button"
                        icon={<PlayCircleOutlined />}
                        type="primary">
                        Play
                    </Button>

                    <Button
                        className={styles.watchWithFriendsButton}
                        htmlType="button"
                        icon={<AliyunOutlined />}
                        type="primary">
                        Watch with friends
                    </Button>

                    <Button
                        className={styles.addToWatchlistButton}
                        htmlType="button"
                        icon={<PlusCircleOutlined />}
                        type="text">
                        Add to Watchlist
                    </Button>
                </Col>
            </Row>
        </Content>
    );
}

MovieCover.propTypes = {
    isPromotional: PropTypes.bool,
    movieDetails: PropTypes.object.isRequired
};

MovieCover.defaultProps = {
    isPromotional: false
};

export default MovieCover;