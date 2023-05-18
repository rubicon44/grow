import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

export const SearchTasksList = ({ tasks }) =>
  tasks &&
  tasks.map((task) => (
    <List key={task.id}>
      title:
      <Link to={`/${task.user.username}/tasks/${task.id}`} key={task.id}>
        {task.title}
        <span>cotent:{task.content}</span>
      </Link>
    </List>
  ));

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
