import PropTypes from "prop-types";
import styled from "styled-components";

export const FormInput = ({
  children,
  inputRef,
  htmlFor,
  type,
  name,
  defaultValue,
  placeholder,
  autoComplete,
  onChangeFunc,
}) => (
  <label htmlFor={htmlFor}>
    {children}
    <Input
      type={type}
      name={name}
      defaultValue={defaultValue}
      ref={inputRef}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={onChangeFunc}
    />
  </label>
);

FormInput.defaultProps = {
  autoComplete: "",
  children: null,
  defaultValue: "",
  inputRef: null,
  onChangeFunc: () => {},
};

FormInput.propTypes = {
  autoComplete: PropTypes.string,
  children: PropTypes.node,
  defaultValue: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  inputRef: PropTypes.objectOf(PropTypes.instanceOf(Element)),
  name: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const Input = styled.input`
  height: 30px;
  margin-top: 5px;
`;
