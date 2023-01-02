import styled from 'styled-components';

export const FormSubmitButton = ({ load, children }) => {
  return (
    <FormButtonCover>
      <Button type="submit" disabled={load}>{children}</Button>
    </FormButtonCover>
  )
};

const Button = styled.button`
  height: 27px;
`

const FormButtonCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;