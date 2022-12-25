import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const NoData = ({ message }) => (
    <Typography.Title
        level={5}
        style={{
            margin: '1.2rem',
            textAlign: 'center'
        }}>
        {message}
    </Typography.Title>
);

NoData.propTypes = {
    message: PropTypes.string.isRequired
};

export default NoData;
