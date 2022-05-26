import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../../../presentational/atoms/Title/title';
import { BackButton } from '../../../presentational/atoms/Button/backButton';

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

export function SearchList(props) {
  // const { currentUserId } = props;
  // const { notifications } = props;
  // const { visitors } = props;
  // const { likeVisitors } = props;

  const [load, setLoad] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    // const { email, password } = e.target.elements;
    // signin(email.value, password.value);
    setLoad(false);
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
            <label htmlFor="search">
              <input name="search" type="search" placeholder="Search" />
            </label>
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

// TaskList.defaultProps = {
//   task: {},
//   taskCreatedUser: {},
// };

// TaskList.propTypes = {
//   task: PropTypes.exact({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     content: PropTypes.string,
//     status: PropTypes.number,
//     start_date: PropTypes.string,
//     end_date: PropTypes.string,
//     created_at: PropTypes.string,
//     updated_at: PropTypes.string,
//     user_id: PropTypes.string,
//     user: PropTypes.exact({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       created_at: PropTypes.string,
//       updated_at: PropTypes.string,
//       email: PropTypes.string,
//       firebase_id: PropTypes.string,
//       password_digest: PropTypes.string,
//       bio: PropTypes.string,
//     }),
//   }),
//   taskCreatedUser: PropTypes.exact({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     created_at: PropTypes.string,
//     updated_at: PropTypes.string,
//     email: PropTypes.string,
//     firebase_id: PropTypes.string,
//     password_digest: PropTypes.string,
//     bio: PropTypes.string,
//   }),
// };