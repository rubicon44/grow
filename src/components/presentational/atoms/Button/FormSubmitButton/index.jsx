import styled from 'styled-components';

export const FormSubmitButton = ({ children, isButtonDisabled }) => {
  return (
    <FormButtonCover>
      <Button type="submit" disabled={isButtonDisabled}>{children}</Button>
    </FormButtonCover>
  );
};

const Button = styled.button`
  height: 27px;
`

const FormButtonCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;