import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchTasksList = ({ sortDescendingOrderTasks }) => {
  return (
    sortDescendingOrderTasks && (
      sortDescendingOrderTasks.map((task) => (
        <List key={task.id}>title:
          <Link to={`/${task.user.username}/tasks/${task.id}`} key={task.id}>
            {task.title}<span>cotent:{task.content}</span>
          </Link>
        </List>
      ))
    )
  );
};

const List = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;