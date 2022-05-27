import React, { useState } from 'react';
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

// const UsersList = styled.div`
//   display: flex;
//   align-items: center;
//   text-align: left;
//   padding-bottom: 10px;
//   border-bottom: 1px solid #ddd;

//   &:not(:first-of-type) {
//     margin-top: 10px;
//   }
// `;

// const UserName = styled(Link)`
//   :hover {
//     text-decoration: underline;
//   }
// `;

// const ListStyle = styled.dl`
//   min-width: 180px;
//   max-width: 180px;
//   margin-top: 15px;
//   text-align: left;

//   > dt {
//     font-weight: bold;
//   }

//   > dd {
//     min-height: 100px;
//     margin: 10px 0 5px;
//     padding: 5px;
//     border: 1px solid #bbb;
//     white-space: pre-wrap;
//   }
// `;

export function SearchList() {
  const [load, setLoad] = useState(false);
  const [searches, setSearches] = useState([]);

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
        console.log(response.data)
        if (isMounted) setSearches(response.data.contents);
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
          {/* {notifications.map((notification) => (
              <UsersList>
                <div>{notification}</div>
              </UsersList>
          ))} */}
        </ListCover>
      </div>
    </>
  );
}