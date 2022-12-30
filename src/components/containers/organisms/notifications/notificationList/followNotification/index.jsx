import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FollowNotification = ({ visitor }) => {
  return (
    <UserNickNameCover>
      <UserNickName to={`/${visitor.username}`}>{visitor.nickname}</UserNickName>さんにフォローされました。
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