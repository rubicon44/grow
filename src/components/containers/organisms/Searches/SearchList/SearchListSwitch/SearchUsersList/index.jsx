import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

export const SearchUsersList = ({ users }) => {
  return (
    users &&
    users.map((user) => (
      <List key={user.id}>
        <Link to={`/${user.username}`}>
          {user.nickname}({user.username})
        </Link>
      </List>
    ))
  );
};

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
