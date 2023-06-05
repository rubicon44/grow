import PropTypes from "prop-types";
import styled from "styled-components";
import { FormInput } from "../../../../../presentational/atoms/Input/FormInput";
import { FormSubmitButton } from "../../../../../presentational/atoms/Button/FormSubmitButton";

export const SearchForm = ({ handleSubmit, isButtonDisabled }) => (
  <SearchFormStyle onSubmit={handleSubmit}>
    <FormInput
      htmlFor="contents"
      type="contents"
      name="contents"
      placeholder="Contents"
    />
    <SelectWithFormSubmitButton>
      <SelectCover>
        <Select name="model">
          <option value="user">User</option>
          <option value="task">Task</option>
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
  handleSubmit: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
};

const SearchFormStyle = styled.form`
  min-width: 260px;
  margin-top: 30px;
  padding: 0 10px;
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
