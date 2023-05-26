import PropTypes from "prop-types";

export const FormTextArea = ({
  children,
  textAreaRef,
  htmlFor,
  name,
  defaultValue,
  placeholder,
}) => (
  <label htmlFor={htmlFor}>
    {children}
    <textarea
      name={name}
      defaultValue={defaultValue}
      ref={textAreaRef}
      placeholder={placeholder}
      cols="80"
      rows="3"
    />
  </label>
);

FormTextArea.defaultProps = {
  children: null,
  defaultValue: "",
  textAreaRef: null,
};

FormTextArea.propTypes = {
  children: PropTypes.node,
  defaultValue: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  textAreaRef: PropTypes.objectOf(PropTypes.instanceOf(Element)),
};
