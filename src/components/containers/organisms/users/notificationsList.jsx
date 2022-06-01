import React from 'react';
import { Link } from 'react-router-dom';
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

const UsersList = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;

  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;


const UserNickName = styled(Link)`
  :hover {
    text-decoration: underline;
  }
`;

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

export function NotificationsList(props) {
  const { currentUserId } = props;
  const { notifications } = props;
  const { visitors } = props;
  const { likeVisitors } = props;
  return (
    <>
      <ListHeader>
        <BackButton />
        <Title title="通知一覧" />
      </ListHeader>
      <ListCover>
        {notifications == null || notifications == '' ? (
          <div>通知はありません。</div>
        ) : (
          notifications.map((notification) => (
            <UsersList>
              {notification.action === "like" && (
                likeVisitors.map((visitor) => (
                  String(notification.visitor_id) === String(visitor.id) && (
                    <div>
                      あなたの
                      <UserNickName to={`/users/${currentUserId}/tasks/${notification.task_id}`} key={notification.task_id}>タスク</UserNickName>
                      が
                      <UserNickName to={`/users/${visitor.id}`} key={visitor.id}>{visitor.nickname}</UserNickName>
                      にいいねされました。
                    </div>
                  )
                ))
              )}
              {notification.action === "follow" && (
                visitors.map((visitor) => (
                  String(notification.visitor_id) === String(visitor.id) && (
                    <div>
                      <UserNickName to={`/users/${visitor.id}`} key={visitor.id}>{visitor.nickname}</UserNickName>
                      さんにフォローされました。
                    </div>
                  )
                ))
              )}
            </UsersList>
          ))
        )}
      </ListCover>
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
//       nickname: PropTypes.string,
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
//     nickname: PropTypes.string,
//     created_at: PropTypes.string,
//     updated_at: PropTypes.string,
//     email: PropTypes.string,
//     firebase_id: PropTypes.string,
//     password_digest: PropTypes.string,
//     bio: PropTypes.string,
//   }),
// };