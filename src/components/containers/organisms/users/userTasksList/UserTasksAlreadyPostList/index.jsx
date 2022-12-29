import styled from 'styled-components';
import { TaskStatusSwitch } from 'components/containers/organisms/Tasks/logic/TaskStatusSwitch';
import { List } from 'components/presentational/molecules/List';

export const UserTasksAlreadyPostList = ({ userData }) => {
  return (
    userData.userTasks.map((task) => (
      <ListCoverWrapper key={task.id}>
        <ListCover>
          <List
            title={task.title}
            titleUrl={`/${String(userData.taskUser.username)}/tasks/${String(task.id)}`}
            content={task.content}
            url={`/${userData.taskUser.username}`}
            text={userData.taskUser.nickname}
          />
          <TaskStatusSwitch taskStatus={task.status} />
        </ListCover>
      </ListCoverWrapper>
    ))
  )
};

const ListCoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  margin-top: 30px;
`;

const ListCover = styled.div`
  position: relative;
`;