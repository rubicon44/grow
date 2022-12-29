import styled from 'styled-components';
import { TaskStatusSwitch } from 'components/containers/organisms/Tasks/logic/TaskStatusSwitch';
import { List } from 'components/presentational/molecules/List';

export const UserTasksAlreadyLikeList = ({ userData }) => {
  const uniqueTaskCreatedUsers = Array.from(
    new Map(userData.taskCreatedUser.map((user) => [user.id, user])).values()
  );
  return (
    // todo: 新しくいいねした順に表示したい。
    userData.userLikedTasks.map((task) => (
      uniqueTaskCreatedUsers.map((user) => (
        String(task.user_id) === String(user.id) && (
          <ListCoverWrapper key={task.id}>
            <ListCover>
              <List
                title={task.title}
                titleUrl={`/${String(user.username)}/tasks/${String(task.id)}`}
                content={task.content}
                url={`/${user.username}`}
                text={user.nickname}
              />
              <TaskStatusSwitch taskStatus={task.status} />
            </ListCover>
          </ListCoverWrapper>
        )
      ))
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