import PropTypes from 'prop-types';
import { Input as AntdInput } from 'antd';

const Input = ({
    ariaLabel,
    id,
    placeholder,
}) => (
    <AntdInput
        aria-label={ariaLabel}
        id={`input-${id}`}
        placeholder={placeholder}
    />
);

Input.propTypes = {
    ariaLabel: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    ariaLabel: "input",
    placeholder: "enter your input"
}

export default Input;
