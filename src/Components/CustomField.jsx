const CustomField = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => (
    <div>
        <input type="text" {...field} {...props} className={touched[field.name] && errors[field.name] ? 'formError' : ''} />
    </div>
);

export default CustomField;
