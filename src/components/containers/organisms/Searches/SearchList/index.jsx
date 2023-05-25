import PropTypes from "prop-types";
import styled from "styled-components";
import { SearchForm } from "./SearchForm";
import { SearchListSwitch } from "./SearchListSwitch";

export const SearchList = ({
  handleSubmit,
  isButtonDisabled,
  tasks,
  users,
}) => (
  <SerchListCover>
    <SearchForm
      handleSubmit={handleSubmit}
      isButtonDisabled={isButtonDisabled}
    />
    <SearchListSwitch tasks={tasks} users={users} />
  </SerchListCover>
);

SearchList.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
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

const SerchListCover = styled.div`
  min-width: 260px;
  margin-top: 25px;
  padding: 0 10px;
`;
