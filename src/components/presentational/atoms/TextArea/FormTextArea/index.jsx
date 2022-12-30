import styled from 'styled-components';

export const FormTextArea = ({ children, textAreaRef, htmlFor, name, defaultValue, placeholder }) => {
  return (
    <FormTextAreaCover>
      <label htmlFor={htmlFor}>
        {children}
        <textarea
          name={name}
          defaultValue={defaultValue}
          ref={textAreaRef}
          placeholder={placeholder}
          cols="80"
          rows="3"
        />
      </label>
    </FormTextAreaCover>
  )
};

const FormTextAreaCover = styled.div`
  margin-bottom: 10px;
  > label {
    display: block;
    > textarea {
      min-width: 260px;
      min-height: 200px;
    }
  }
`;