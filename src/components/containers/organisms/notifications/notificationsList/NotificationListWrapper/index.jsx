import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NotificationList } from './NotificationList';

export const NotificationListWrapper = ({ currentUserName, notificationsData }) => {
  const { likeVisitors } = notificationsData;
  // todo: useNotificationsDataへ移動予定(全関連ロジックのカスタムHooksへの移動による可読性向上のため。)。
  // todo: & 再利用化予定
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
    followVisitors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      bio: PropTypes.string,
      email: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })).isRequired,
    likeVisitors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      bio: PropTypes.string,
      email: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })).isRequired,
    notifications: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      taskId: PropTypes.number,
      visitedId: PropTypes.number.isRequired,
      visitorId: PropTypes.number.isRequired,
      action: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })).isRequired,
  }).isRequired,
};

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;