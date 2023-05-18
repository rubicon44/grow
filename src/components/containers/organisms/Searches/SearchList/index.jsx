import PropTypes from "prop-types";
import styled from "styled-components";
import { SearchForm } from "./SearchForm";
import { SearchListSwitchContainer } from "./SearchListSwitchContainer";
import { TitleWithBackArrowHeader } from "../../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const SearchList = ({
  error,
  handleSubmit,
  isButtonDisabled,
  loading,
  tasks,
  users,
}) => {
  return (
    <>
      <TitleWithBackArrowHeader>検索一覧</TitleWithBackArrowHeader>
      <SerchListContent>
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
      </SerchListContent>
    </>
  );
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

const SerchListContent = styled.div`
  min-width: 260px;
  margin-top: 25px;
  padding: 0 10px;
`;
