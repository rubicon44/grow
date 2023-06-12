import PropTypes from "prop-types";
import styled from "styled-components";
import { FormInput } from "../../../../../presentational/atoms/Input/FormInput";
import { FormSubmitButton } from "../../../../../presentational/atoms/Button/FormSubmitButton";

export const SearchForm = ({
  handleSelectChange,
  handleSubmit,
  isButtonDisabled,
}) => (
  <SearchFormStyle onSubmit={handleSubmit}>
    <FormInput
      htmlFor="contents"
      type="contents"
      name="contents"
      placeholder="Contents"
    />
    <SelectWithFormSubmitButton>
      <SelectCover>
        <Select name="model" onChange={handleSelectChange}>
          <option value="task">Task</option>
          <option value="user">User</option>
        </Select>
      </SelectCover>
      <FormSubmitButtonCover>
        <FormSubmitButton isButtonDisabled={isButtonDisabled}>
          検索
        </FormSubmitButton>
      </FormSubmitButtonCover>
    </SelectWithFormSubmitButton>
  </SearchFormStyle>
);

SearchForm.propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
};

const SearchFormStyle = styled.form`
  position: sticky;
  top: 50px;
  width: 100%;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
  z-index: 9999;
  > label {
    display: block;
    margin-bottom: 14px;
  }
`;

const FormSubmitButtonCover = styled.div`
  margin-left: auto;
`;

const Select = styled.select`
  height: 27px;
`;

const SelectCover = styled.div`
  > select:not(:first-of-type) {
    margin-left: 5px;
  }
`;

const SelectWithFormSubmitButton = styled.div`
  display: flex;
`;
