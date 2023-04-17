import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const FollowNotification = ({ visitor }) => {
  return (
    <UserNickNameCover>
      <UserNickName to={`/${visitor.username}`}>{visitor.nickname}</UserNickName>さんにフォローされました。
    </UserNickNameCover>
  );
};

FollowNotification.propTypes = {
  visitor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firebase_id: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    paswword_digest: PropTypes.string,
    username: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  }).isRequired,
};

const UserNickNameCover = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const UserNickName = styled(Link)`
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`;