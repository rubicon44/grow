import styled from 'styled-components';
import { LikeOrUnLikeButtonSwitchContainer } from '../../Likes/LikeOrUnLikeButtonSwitchContainer';
import { TaskStatusSwitch } from '../logic/TaskStatusSwitch';
import { List } from '../../../../presentational/molecules/List';
import { NextButtonLink } from '../../../../presentational/atoms/Link/NextButtonLink';
import { Popup } from '../../../../presentational/atoms/Popup';
import { Title } from '../../../../presentational/atoms/Title';

export const TasksList = ({ currentUserId, showPopup, tasks }) => {
  return (
    <>
      <Popup message="タスクが正常に作成されました。" duration={3000} showPopup={showPopup} />
      <Title>タスク一覧</Title>
      <NextButtonLink text="タスク登録" url="/tasks/create" />
      {tasks?.map((task) => (
        <ListCover key={task.id}>
          <List
            title={task.title}
            titleUrl={`/${task.user.username}/tasks/${String(task.id)}`}
            content={task.content}
            url={`/${task.user.username}`}
            text={task.user.nickname}
          />
          <TaskStatusSwitch taskStatus={task.status} />
          <LikeOrUnLikeButtonSwitchContainer taskId={String(task.id)} currentUserId={String(currentUserId)} />
        </ListCover>
      ))}
    </>
  );
};

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;