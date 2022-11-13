import PropTypes from 'prop-types';
import { Form as AntdForm } from 'antd';

const FormItem = ({
    ariaLabel,
    children,
    id,
    label,
    name,
    rules
}) => {
    return (
        <AntdForm.Item
            aria-label={ariaLabel}
            id={id}
            label={label}
            name={name}
            required
            rules={rules}
        >
            {children}
        </AntdForm.Item>
    );
};

FormItem.propTypes = {
    ariaLabel: PropTypes.string,
    children: PropTypes.element.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.arrayOf(PropTypes.object),
};

FormItem.defaultProps = {
    ariaLabel: 'formItem',
    rules: []
};

export default FormItem;
