import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { UserTasksListContainer } from 'components/containers/organisms/Users/UserTasksList/UserTasksListContainer';
import { Popup } from 'components/presentational/atoms/Popup';

export const UserShowTemplate = ({ showPopup }) => {
  return (
    <MainWithHeader>
      <Popup message="タスクが正常に削除されました。" duration={3000} showPopup={showPopup} />
      <UserTasksListContainer />
    </MainWithHeader>
  );
};