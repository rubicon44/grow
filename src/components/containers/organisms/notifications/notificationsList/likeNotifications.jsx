import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LikeNotifications = ({ currentUserName, notification, visitor }) => {
  return (
    <UserNickNameCover>
      あなたの<UserNickName to={`/${currentUserName}/tasks/${notification.task_id}`}>タスク</UserNickName>が<UserNickName to={`/${visitor.username}`}>{visitor.nickname}</UserNickName>にいいねされました。
    </UserNickNameCover>
  )
}

const UserNickNameCover = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`

const UserNickName = styled(Link)`
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`;