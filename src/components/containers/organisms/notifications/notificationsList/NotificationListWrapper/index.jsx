import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NotificationList } from './NotificationList';

export const NotificationListWrapper = ({ currentUserName, notificationsData }) => {
  const { likeVisitors } = notificationsData;
  const uniqueLikeVisitors = Array.from(new Map(likeVisitors.map((visitor) => [visitor.id, visitor])).values());

  if (!uniqueLikeVisitors || uniqueLikeVisitors.length === 0) {
    return (
      <ListCover>
        <div>通知はありません。</div>
      </ListCover>
    );
  };

  return (
    <ListCover>
      <NotificationList notificationsData={notificationsData} currentUserName={currentUserName} />
    </ListCover>
  );
};

NotificationListWrapper.propTypes = {
  currentUserName: PropTypes.string.isRequired,
  notificationsData: PropTypes.shape({
    likeVisitors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      firebase_id: PropTypes.string.isRequired,
      bio: PropTypes.string,
      email: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      paswword_digest: PropTypes.string,
      username: PropTypes.string.isRequired,
    })).isRequired,
    notifications: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      task_id: PropTypes.number,
      visited_id: PropTypes.number.isRequired,
      visitor_id: PropTypes.number.isRequired,
      action: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })).isRequired,
    visitors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      firebase_id: PropTypes.string.isRequired,
      bio: PropTypes.string,
      email: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      paswword_digest: PropTypes.string,
      username: PropTypes.string.isRequired,
    })).isRequired,
  }),
};

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;