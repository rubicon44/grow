import styled from 'styled-components';
import { SearchTasksList } from './searchTasksList';
import { SearchUsersList } from './searchUsersList';

export const SearchListSwitch = ({ sortDescendingOrderUsers, sortDescendingOrderTasks }) => {
  return (
    <ListCover>
      <SearchTasksList sortDescendingOrderTasks={sortDescendingOrderTasks} />
      <SearchUsersList sortDescendingOrderUsers={sortDescendingOrderUsers} />
    </ListCover>
  );
};

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;