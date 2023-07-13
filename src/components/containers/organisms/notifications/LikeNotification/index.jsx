import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

export const LikeNotification = ({
  currentUserName,
  notification,
  visitor,
}) => (
  <>
    あなたの
    <UserNickName to={`/${currentUserName}/tasks/${notification.taskId}`}>
      タスク
    </UserNickName>
    が
    <UserNickName to={`/${visitor.username}`}>{visitor.nickname}</UserNickName>
    にいいねされました。
  </>
);

LikeNotification.propTypes = {
  currentUserName: PropTypes.string.isRequired,
  notification: PropTypes.shape({
    id: PropTypes.string.isRequired,
    taskId: PropTypes.string.isRequired,
    visitedId: PropTypes.string.isRequired,
    visitorId: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  visitor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
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
