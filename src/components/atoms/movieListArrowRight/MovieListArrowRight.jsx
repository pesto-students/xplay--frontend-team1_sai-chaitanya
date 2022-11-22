import PropTypes from 'prop-types';
import { RightOutlined } from '@ant-design/icons';

const MovieListArrowRight = (props) => {
    const { className, onClick } = props;
    return (
        <RightOutlined
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

MovieListArrowRight.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
};

MovieListArrowRight.defaultProps = {
    className: '',
    onClick: () => { },
    style: {},
}

export default MovieListArrowRight;
