import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

// todo: ページネーション or 「さらに表示ボタン」を作成
export const SearchUsersList = ({ users }) =>
  users && (
    <List>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/${user.username}`}>
            {user.nickname}({user.username})
          </Link>
        </li>
      ))}
    </List>
  );

SearchUsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      bio: PropTypes.string,
      email: PropTypes.string,
      nickname: PropTypes.string,
      username: PropTypes.string,
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
