import React from 'react';
import PropTypes from 'prop-types';
import { LeftOutlined } from '@ant-design/icons';

const MovieListArrowLeft = (props) => {
    const { className, onClick } = props;
    return (
        <LeftOutlined
            className={className}
            style={{
                color: 'white',
                fontSize: 'inherit',
                opacity: className?.includes('disabled') ? 0.4 : 1
            }}
            onClick={onClick}
        />
    );
}

MovieListArrowLeft.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
};

MovieListArrowLeft.defaultProps = {
    className: '',
    onClick: () => { },
    style: {},
}

export default MovieListArrowLeft;
