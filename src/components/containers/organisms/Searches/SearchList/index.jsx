import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getSearches } from 'infra/api';
import { SearchForm } from 'components/containers/organisms/Searches/SearchForm';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const SearchList = () => {
  const [load, setLoad] = useState(false);
  const [searchResults, setSearchResults] = useState({
    users: [],
    usersForUser: [],
    tasks: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    const { model } = e.target.elements;
    const { contents } = e.target.elements;
    const { method } = e.target.elements;
    const searchData = { model: model.value, contents: contents.value, method: method.value };
    let isMounted = true;
    getSearches(searchData)
      .then((response) => {
        if (isMounted) setSearchResults({
          users: response.data.results.users,
          usersForUser: response.data.results.users_for_user,
          tasks: response.data.results.tasks,
        });
      })
      .catch();
    setLoad(false);
    return () => {
      isMounted = false;
    };
  };

  // todo: APIから重複したデータが返却されているため、APIのcontrollerで重複を取り除くロジックを書く。
  const uniqueSearchDataUsers = searchResults.users && Array.from(
    new Map(searchResults.users.map((user) => [user.id, user])).values()
  );

  return (
    <>
      <TitleWithBackArrowHeader>検索一覧</TitleWithBackArrowHeader>
      <div>
        <SearchForm handleSubmit={handleSubmit} load={load} />
        <ListCover>
          {searchResults.usersForUser && (
            // todo: 下記の配列の出し分け方法だと、一度すべての配列を取得してから出し分けするので、データ量が多いと効率が悪いかも?
            searchResults.usersForUser.map((user) => (
              <List key={user.id}>
                <Link to={`/${user.username}`}>{user.nickname}({user.username})</Link>
              </List>
            ))
          )}
          {searchResults.tasks && (
            // todo: 作成された順番に出力したい。
            // todo: 下記の配列の出し分け方法だと、一度すべての配列を取得してから出し分けするので、データ量が多いと効率が悪いかも?
            searchResults.tasks.map((task) => (
              <List key={task.id}>title:
                {uniqueSearchDataUsers.map((user) => (
                  user.id === task.user_id && (
                    <Link to={`/${user.username}/tasks/${task.id}`} key={user.username}>
                      {task.title}<span>cotent:{task.content}</span>
                    </Link>
                  )
                ))}
              </List>
            ))
          )}
        </ListCover>
      </div>
    </>
  );
};

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;

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