import styled from 'styled-components';
import { NotificationList } from 'components/containers/organisms/Notifications/NotificationList';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const NotificationsList = ({ currentUserName, isLoading, notificationsData }) => {
  return (
    <>
      <TitleWithBackArrowHeader>通知一覧</TitleWithBackArrowHeader>
      { isLoading ?
        <ListCover>
          {notificationsData.notifications == null || notificationsData.notifications == '' ? (<div>通知はありません。</div>) : (<NotificationList notificationsData={notificationsData} currentUserName={currentUserName} />)}
        </ListCover>
        : <>ロード中です...</>
      }
    </>
  );
};

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;