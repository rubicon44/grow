import PropTypes from "prop-types";
import styled from "styled-components";

export const FormSubmitButton = ({ children, isButtonDisabled }) => (
  <Button type="submit" disabled={isButtonDisabled}>
    {children}
  </Button>
);

FormSubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
};

const Button = styled.button`
  height: 27px;
`;
