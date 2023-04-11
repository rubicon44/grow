import PropTypes from 'prop-types';
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
  );
};

FormTextArea.propTypes = {
  children: PropTypes.node,
  defaultValue: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  textAreaRef: PropTypes.object,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
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