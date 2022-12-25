import React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Typography } from 'antd';

import Atoms from '../../atoms';
import MovieCover from '../movieCover';
import Context from '../../../context';
import styles from './partyCover.module.scss';

const PartyCover = ({ partyDetails, onPlayClick }) => {
    const isMobile = useContext(Context.DeviceContext);

    return (
        <>
            <MovieCover
                actions={{
                    onPlayClick: onPlayClick,
                    playButtonTitle: 'Start Streaming'
                }}
                isPromotional={true}
                movieDetails={partyDetails?.movieDetails ?? {}}
            />

            <Row className={styles.titleRow}>
                <Col span={24}>
                    <Typography.Title
                        level={5}
                        style={{
                            color: '#FF7732'
                        }}>
                        Party Details
                    </Typography.Title>
                </Col>
            </Row>

            <Row className={styles.hostRow}>
                <Col
                    lg={6}
                    md={4}
                    sm={4}
                    xl={6}
                    xs={4}
                    xxl={6}>
                    <Typography>Host</Typography>
                </Col>
                <Col
                    lg={18}
                    md={20}
                    sm={20}
                    xl={18}
                    xs={20}
                    xxl={18}>
                    <Typography
                        style={{
                            marginLeft: isMobile ? '10.6rem' : '26.6rem',
                            marginTop: '-1.2rem'
                        }}>
                        {partyDetails?.host}
                    </Typography>
                </Col>
            </Row>

            {isMobile ? (
                <Row className={styles.title2Row}>
                    <Atoms.Divider />
                    <Col span={24}>
                        <Typography.Title
                            level={5}
                            style={{
                                color: '#FF7732'
                            }}>
                            Storyline
                        </Typography.Title>
                    </Col>

                    <Col span={24}>
                        <Typography.Paragraph>
                            {partyDetails?.movieDetails?.description}
                        </Typography.Paragraph>
                    </Col>
                </Row>
            )
                : null
            }
        </>
    );
}

PartyCover.propTypes = {
    partyDetails: PropTypes.object.isRequired,
    onPlayClick: PropTypes.func.isRequired
};

export default PartyCover;
