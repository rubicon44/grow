import styled from 'styled-components';

export const FormInput = ({ children, inputRef, htmlFor, type, name, defaultValue, placeholder, autoComplete }) => {
  return (
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
`