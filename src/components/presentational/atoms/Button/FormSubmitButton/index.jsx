import styled from 'styled-components';

export const FormSubmitButton = ({ load, children }) => {
  return (
    <FormButtonCover>
      <button type="submit" disabled={load}>{children}</button>
    </FormButtonCover>
  )
};

const FormButtonCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;