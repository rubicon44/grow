import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../../presentational/atoms/Title/title';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { getSearches } from '../../../../infra/api';

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

export function SearchList() {
  const [load, setLoad] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    const { contents } = e.target.elements;
    const { model } = e.target.elements;
    const { method } = e.target.elements;
    const searchData = { contents: contents.value, model: model.value, method: method.value };
    let isMounted = true;
    getSearches(searchData)
      .then((response) => {
        if (isMounted) setSearchResults(response.data.results);
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
        <BackButton />
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
              <option value="perfect">完全一致</option>
              <option value="partial">部分一致</option>
            </select>
            <button type="submit" disabled={load}>
              検索
            </button>
          </form>
        </FormCover>
        <ListCover>
          {searchResults.map((result) => (
            <>
              {result.name && (
                <List>
                  name:
                  <Link to={`/users/${result.id}`}>{result.name}</Link>
                </List>
              )}
              {result.title && (
                <List>
                  title:
                  <Link to={`/users/${result.user_id}/tasks/${result.id}`}>{result.title}</Link>
                  <div>cotent:{result.content}</div>
                </List>
              )}
            </>
          ))}
        </ListCover>
      </div>
    </>
  );
}