import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SearchForm } from './SearchForm';
import { SearchListSwitchContainer } from './SearchListSwitchContainer';
import { TitleWithBackArrowHeader } from '../../../../presentational/molecules/Header/TitleWithBackArrowHeader';

export const SearchList = ({ error, handleSubmit, isButtonDisabled, loading, sortDescendingOrderTasks, sortDescendingOrderUsers }) => {
  return (
    <>
      <TitleWithBackArrowHeader>検索一覧</TitleWithBackArrowHeader>
      <SerchListContent>
        <SearchForm handleSubmit={handleSubmit} isButtonDisabled={isButtonDisabled} />
        <SearchListSwitchContainer
          error={error}
          loading={loading}
          sortDescendingOrderTasks={sortDescendingOrderTasks}
          sortDescendingOrderUsers={sortDescendingOrderUsers}
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
  sortDescendingOrderTasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    content: PropTypes.string,
    status: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      firebase_id: PropTypes.string,
      bio: PropTypes.string,
      email: PropTypes.string,
      nickname: PropTypes.string,
      password_digest: PropTypes.string,
      username: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
    }),
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  })).isRequired,
  sortDescendingOrderUsers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    firebase_id: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    nickname: PropTypes.string,
    password_digest: PropTypes.string,
    username: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  })).isRequired,
};

const SerchListContent = styled.div`
  min-width: 260px;
  margin-top: 25px;
  padding: 0 10px;
`;