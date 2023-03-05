import styled from 'styled-components';
import { LikeOrUnLikeButtonSwitchContainer } from '../../likes/likeOrUnLikeButtonSwitchContainer';
import { TaskStatusSwitch } from '../logic/taskStatusSwitch';
import { List } from '../../../../presentational/molecules/list';
import { NextButtonLink } from '../../../../presentational/atoms/link/nextButtonLink';
import { Popup } from '../../../../presentational/atoms/popup';
import { Title } from '../../../../presentational/atoms/title';

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