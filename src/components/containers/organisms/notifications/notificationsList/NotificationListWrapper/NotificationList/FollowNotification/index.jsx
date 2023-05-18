import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

export const FollowNotification = ({ visitor }) => (
  <UserNickNameCover>
    <UserNickName to={`/${visitor.username}`}>{visitor.nickname}</UserNickName>
    さんにフォローされました。
  </UserNickNameCover>
);

FollowNotification.propTypes = {
  visitor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
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
