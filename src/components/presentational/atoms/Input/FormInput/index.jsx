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
}) => (
  <FormInputCover>
    <label htmlFor={htmlFor}>
      {children}
      <Input
        type={type}
        name={name}
        defaultValue={defaultValue}
        ref={inputRef}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </label>
  </FormInputCover>
);

FormInput.defaultProps = {
  autoComplete: "",
  children: null,
  defaultValue: "",
  inputRef: null,
};

FormInput.propTypes = {
  autoComplete: PropTypes.string,
  children: PropTypes.node,
  defaultValue: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  inputRef: PropTypes.objectOf(PropTypes.instanceOf(Element)),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const FormInputCover = styled.div`
  margin-bottom: 10px;
  > label {
    display: block;
    > input {
      min-width: 260px;
    }
  }
`;

const Input = styled.input`
  height: 30px;
`;
