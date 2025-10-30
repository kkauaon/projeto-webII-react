import { IoWarning } from 'react-icons/io5';
import styles from '../App.scss'
import { FcHighPriority } from 'react-icons/fc';
import { Tooltip } from 'react-tooltip'

const CustomField = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => {
    const hasError = touched[field.name] && errors[field.name];

    return (
        <div
            style={{
                position: 'relative',
                display: 'inline-block',
                width: '100%',
            }}
        >
            <input
                type="text"
                {...field}
                {...props}
                className={hasError ? 'formError' : ''}
                style={{
                    paddingRight: hasError ? '35px' : undefined,
                    ...props.style,
                }}
            />
            {hasError && (
                <span data-tooltip-id="error-tooltip" data-tooltip-content={errors[field.name]}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <FcHighPriority size={20} />
					<Tooltip id="error-tooltip" />
                </span>
            )}
        </div>
    );
};

export default CustomField;
