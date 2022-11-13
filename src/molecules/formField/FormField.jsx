import { Input } from 'antd';
import { FormItem } from "../formItem";

const FormField = ({
    id,
    label,
    name,
    placeholder,
    type,
}) => (
    <FormItem
        id={`${id}-item`}
        label={label}
        name={name}
    >
        {type === 'password' ?
            <Input.Password
                id={id}
                placeholder={placeholder}
            /> : <Input
                id={id}
                placeholder={placeholder}
            />
        }
    </FormItem>
);

export default FormField;
