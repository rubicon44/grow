import styled from 'styled-components';
import { SearchForm } from 'components/containers/organisms/Searches/SearchForm';
import { SearchTasksList } from 'components/containers/organisms/Searches/SearchList/SearchTasksList';
import { SearchUsersList } from 'components/containers/organisms/Searches/SearchList/SearchUsersList';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const SearchList = ({ sortDescendingOrderUsers, sortDescendingOrderTasks, load, handleSubmit }) => {
  return (
    <>
      <TitleWithBackArrowHeader>検索一覧</TitleWithBackArrowHeader>
      <SerchListContent>
        <SearchForm handleSubmit={handleSubmit} load={load} />
        <ListCover>
          <SearchTasksList sortDescendingOrderTasks={sortDescendingOrderTasks} />
          <SearchUsersList sortDescendingOrderUsers={sortDescendingOrderUsers} />
        </ListCover>
      </SerchListContent>
    </>
  );
};

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;

const SerchListContent = styled.div`
  min-width: 260px;
  margin-top: 25px;
  padding: 0 10px;
`;