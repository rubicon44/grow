import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

// todo: ページネーション or 「さらに表示ボタン」を作成
export const SearchTasksList = ({ tasks }) =>
  tasks && (
    <List>
      {tasks.map((task) => (
        <li key={task.id}>
          <Link to={`/${task.user.username}/tasks/${task.id}`} key={task.id}>
            <div>title:{task.title}</div>
            <div>cotent:{task.content}</div>
          </Link>
        </li>
      ))}
    </List>
  );

SearchTasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      content: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.number,
        bio: PropTypes.string,
        email: PropTypes.string,
        nickname: PropTypes.string,
        username: PropTypes.string,
      }),
    })
  ).isRequired,
};

const List = styled.ul`
  margin-top: 10px;
  > li {
    display: flex;
    align-items: center;
    min-width: 260px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }
`;
