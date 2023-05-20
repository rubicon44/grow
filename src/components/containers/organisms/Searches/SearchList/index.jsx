import PropTypes from "prop-types";
import styled from "styled-components";
import { SearchForm } from "./SearchForm";
import { SearchListSwitchContainer } from "./SearchListSwitchContainer";

export const SearchList = ({
  error,
  handleSubmit,
  isButtonDisabled,
  loading,
  tasks,
  users,
}) => (
  <SerchListCover>
    <SearchForm
      handleSubmit={handleSubmit}
      isButtonDisabled={isButtonDisabled}
    />
    <SearchListSwitchContainer
      error={error}
      loading={loading}
      tasks={tasks}
      users={users}
    />
  </SerchListCover>
);

SearchList.defaultProps = {
  error: false,
  loading: false,
};

SearchList.propTypes = {
  error: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
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
