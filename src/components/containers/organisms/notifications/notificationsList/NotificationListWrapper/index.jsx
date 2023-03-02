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

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;