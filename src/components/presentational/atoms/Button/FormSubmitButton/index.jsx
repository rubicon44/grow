import PropTypes from "prop-types";
import styled from "styled-components";

export const FormSubmitButton = ({ children, isButtonDisabled }) => {
  return (
    <FormButtonCover>
      <Button type="submit" disabled={isButtonDisabled}>
        {children}
      </Button>
    </FormButtonCover>
  );
};

FormSubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
};

const Button = styled.button`
  height: 27px;
`;

const FormButtonCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;
