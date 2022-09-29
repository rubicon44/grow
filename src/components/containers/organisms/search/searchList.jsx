import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../../presentational/atoms/Title';
import { BackArrow } from '../../../presentational/atoms/Arrow/backArrow';
import { getSearches } from '../../../../infra/api';

export function SearchList() {
  const [load, setLoad] = useState(false);
  const [searchResultsUsersForUser, setSearchResultsUsersForUser] = useState([]);
  const [searchResultsUsers, setSearchResultsUsers] = useState([]);
  const [searchResultsTasks, setSearchResultsTasks] = useState([]);

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
        if (isMounted) setSearchResultsUsersForUser(response.data.results.users_for_user);
        if (isMounted) setSearchResultsUsers(response.data.results.users);
        if (isMounted) setSearchResultsTasks(response.data.results.tasks);
      })
      .catch();
    // .catch(() => {
    // });
    setLoad(false);
    return () => {
      isMounted = false;
    };
  };

  return (
    <>
      <ListHeader>
        <BackArrow />
        <Title title="検索一覧" />
      </ListHeader>
      <div>
        <FormCover>
          <form onSubmit={handleSubmit}>
            <label htmlFor="contents">
              <input name="contents" type="contents" placeholder="Contents" />
            </label>
            <select name="model">
            <option value="user">User</option>
              <option value="task">Task</option>
            </select>
            <select name="method">
              <option value="partial">部分一致</option>
              <option value="perfect">完全一致</option>
            </select>
            <button type="submit" disabled={load}>
              検索
            </button>
          </form>
        </FormCover>
        <ListCover>
          {searchResultsUsersForUser && (
            searchResultsUsersForUser.map((user) => (
              <>
              {/* 下記の配列の出し分け方法だと、一度すべての配列を取得してから出し分けするので、データ量が多いと効率が悪いかも? */}
                <List>
                  <Link to={`/${user.username}`}>
                    {user.nickname}
                    (<span>{user.username}</span>)
                  </Link>
                </List>
              </>
            ))
          )}
          {searchResultsTasks && (
            searchResultsTasks.map((task) => (
              <>
              {/* 下記の配列の出し分け方法だと、一度すべての配列を取得してから出し分けするので、データ量が多いと効率が悪いかも? */}
                <List>
                  title:
                  {searchResultsUsers.map((user) => (
                    user.id == task.user_id && (
                      <Link to={`/${user.username}/tasks/${task.id}`}>
                        {task.title}
                        <span>cotent:{task.content}</span>
                      </Link>
                    )
                  ))}
                </List>
              </>
            ))
          )}
        </ListCover>
      </div>
    </>
  );
}

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;

const ListHeader = styled.div`
  display: flex;
  width: 100%;

  > h2 {
    width: 100%;
    margin-right: 45px;
  }
`;

const FormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
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