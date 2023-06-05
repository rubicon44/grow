import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

export const FollowNotification = ({ visitor }) => (
  <>
    <UserNickName to={`/${visitor.username}`}>{visitor.nickname}</UserNickName>
    さんにフォローされました。
  </>
);

FollowNotification.propTypes = {
  visitor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

const UserNickName = styled(Link)`
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`;
