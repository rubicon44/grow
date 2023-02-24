import styled from 'styled-components';
import { TaskStatusSwitch } from 'components/containers/organisms/Tasks/logic/TaskStatusSwitch';
import { List } from 'components/presentational/molecules/List';

export const UserTasksAlreadyLikeList = ({ userData }) => {
  return (
    userData.likedTasksWithUser.map((data) => (
      <ListCoverWrapper key={data.task.id}>
        <ListCover>
          <List
            title={data.task.title}
            titleUrl={`/${String(data.user.username)}/tasks/${String(data.task.id)}`}
            content={data.task.content}
            url={`/${data.user.username}`}
            text={data.user.nickname}
          />
          <TaskStatusSwitch taskStatus={data.task.status} />
        </ListCover>
      </ListCoverWrapper>
    ))
  );
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