import styled from 'styled-components';

export const FormButton = ({ children, handleClick }) => {
  return (
    <FormButtonCover>
      <Button type="button" onClick={handleClick}>{children}</Button>
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