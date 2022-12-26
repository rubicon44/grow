import React from 'react';
import styled from 'styled-components';
import { FormInput } from 'components/presentational/atoms/Input/FormInput';
import { FormSubmitButton } from 'components/presentational/atoms/Button/FormSubmitButton';

export const SearchForm = ({ handleSubmit, load }) => {
  return (
    <SearchFormCover>
      <form onSubmit={handleSubmit}>
        <FormInput
          htmlFor="contents"
          type="contents"
          name="contents"
          placeholder="Contents"
        />
        <select name="model">
          <option value="user">User</option>
          <option value="task">Task</option>
        </select>
        <select name="method">
          <option value="partial">部分一致</option>
          <option value="perfect">完全一致</option>
        </select>
        <FormSubmitButton load={load}>検索</FormSubmitButton>
      </form>
    </SearchFormCover>
  );
};

const SearchFormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
`;