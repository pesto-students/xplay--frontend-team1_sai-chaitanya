import PropTypes from 'prop-types';
import { Button, Form as AntdForm, Row, Space } from 'antd';

const Form = ({
    ariaLabel,
    children,
    id,
    labelAlign,
    layout,
    name,
    onError,
    onReset,
    onSubmit,
    submitLabel,
}) => {
    return (
        <Space align="center">
            <AntdForm
                aria-label={ariaLabel}
                autoComplete="off"
                initialValues={{
                    remember: true,
                }}
                id={id}
                labelAlign={labelAlign}
                layout={layout}
                name={name}
                onFinish={onSubmit}
                onFinishFailed={onError}
                onReset={onReset}
            >
                {children}

                <Row justify="center">
                    <Button className='buttonplace' type="primary" htmlType="submit">
                        {submitLabel}
                    </Button>
                </Row>
            </AntdForm>
        </Space>
    );
}

Form.propTypes = {
    ariaLabel: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    id: PropTypes.string.isRequired,
    labelAlign: PropTypes.oneOf(["left", "right"]),
    layout: PropTypes.oneOf(["inline", "horizontal", "vertical"]),
    name: PropTypes.string,
    onError: PropTypes.func,
    onReset: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    submitLabel: PropTypes.string,
};

Form.defaultProps = {
    ariaLabel: "form",
    labelAlign: "left",
    layout: "vertical",
    name: "form",
    onError: () => { },
    onReset: () => { },
    submitLabel: "Submit",
};

export default Form;
