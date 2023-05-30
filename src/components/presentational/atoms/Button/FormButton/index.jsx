import PropTypes from "prop-types";
import styled from "styled-components";

export const FormButton = ({ children, handleClick }) => (
  <Button type="button" onClick={handleClick}>
    {children}
  </Button>
);

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const Button = styled.button`
  height: 27px;
`;
