import styled from 'styled-components';
import { SearchForm } from 'components/containers/organisms/Searches/SearchForm';
import { SearchListSwitchContainer } from 'components/containers/organisms/Searches/SearchList/SearchListSwitch/SearchListSwitchContainer';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const SearchList = ({ error, handleSubmit, isButtonDisabled, loading, sortDescendingOrderTasks, sortDescendingOrderUsers }) => {
  return (
    <>
      <TitleWithBackArrowHeader>検索一覧</TitleWithBackArrowHeader>
      <SerchListContent>
        <SearchForm handleSubmit={handleSubmit} isButtonDisabled={isButtonDisabled} />
        <SearchListSwitchContainer
          error={error}
          loading={loading}
          sortDescendingOrderTasks={sortDescendingOrderTasks}
          sortDescendingOrderUsers={sortDescendingOrderUsers}
        />
      </SerchListContent>
    </>
  );
};

const SerchListContent = styled.div`
  min-width: 260px;
  margin-top: 25px;
  padding: 0 10px;
`;