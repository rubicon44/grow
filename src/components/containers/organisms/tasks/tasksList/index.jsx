import styled from 'styled-components';
import { LikeOrUnLikeButtonSwitchContainer } from 'components/containers/organisms/Likes/LikeOrUnLikeButtonSwitch/LikeOrUnLikeButtonSwitchContainer';
import { TaskStatusSwitch } from 'components/containers/organisms/Tasks/logic/TaskStatusSwitch';
import { List } from 'components/presentational/molecules/List';

export const TasksList = ({ currentUserId, tasks }) => {
  return (
    tasks.map((task) => (
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
    ))
  );
};

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;