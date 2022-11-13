import PropTypes from 'prop-types';
import { Button as AntdButton } from 'antd';

const Button = ({
    ariaLabel,
    children,
    id,
    onClick,
    title,
    type,
}) => (
    <AntdButton
        aria-label={ariaLabel}
        id={`button-${id}`}
        onClick={onClick}
        title={title}
        type={type}
    >
        {children}
    </AntdButton>
);

Button.propTypes = {
    ariaLabel: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["link", "text", "ghost", "default", "primary", "dashed"]),
    title: PropTypes.string.isRequired,
};

Button.defaultProps = {
    ariaLabel: "input",
    type: "default",
};

export default Button;
