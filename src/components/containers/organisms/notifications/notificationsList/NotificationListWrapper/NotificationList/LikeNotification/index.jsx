import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

export const LikeNotification = ({
  currentUserName,
  notification,
  visitor,
}) => (
  <UserNickNameCover>
    あなたの
    <UserNickName to={`/${currentUserName}/tasks/${notification.taskId}`}>
      タスク
    </UserNickName>
    が
    <UserNickName to={`/${visitor.username}`}>{visitor.nickname}</UserNickName>
    にいいねされました。
  </UserNickNameCover>
);

LikeNotification.propTypes = {
  currentUserName: PropTypes.string.isRequired,
  notification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    taskId: PropTypes.number.isRequired,
    visitedId: PropTypes.number.isRequired,
    visitorId: PropTypes.number.isRequired,
    action: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
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
