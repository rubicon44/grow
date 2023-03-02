import styled from 'styled-components';
import { FormInput } from '../../../../../presentational/atoms/Input/FormInput';
import { FormSubmitButton } from '../../../../../presentational/atoms/Button/FormSubmitButton';

export const SearchForm = ({ handleSubmit, isButtonDisabled }) => {
  return (
    <SearchFormCover>
      <form onSubmit={handleSubmit}>
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
            <Select name="method">
              <option value="partial">部分一致</option>
              <option value="perfect">完全一致</option>
            </Select>
          </SelectCover>
          <FormSubmitButtonCover>
            <FormSubmitButton isButtonDisabled={isButtonDisabled}>検索</FormSubmitButton>
          </FormSubmitButtonCover>
        </SelectWithFormSubmitButton>
      </form>
    </SearchFormCover>
  );
};

const FormSubmitButtonCover = styled.div`
  margin-left: auto;
`;

const SearchFormCover = styled.div`
  text-align: left;
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