import PropTypes from "prop-types";
import styled from "styled-components";

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
    <TextArea
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

const TextArea = styled.textarea`
  min-height: 250px;
  resize: vertical;
`;
