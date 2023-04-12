import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LikeOrUnLikeButtonSwitchContainer } from '../../likes/LikeOrUnLikeButtonSwitchContainer';
import { TaskStatusSwitch } from '../logic/taskStatusSwitch';
import { List } from '../../../../presentational/molecules/List';
import { NextButtonLink } from '../../../../presentational/atoms/Link/NextButtonLink';
import { Popup } from '../../../../presentational/atoms/Popup';
import { Title } from '../../../../presentational/atoms/Title';

export const TasksList = ({ showPopup, tasks }) => {
  return (
    <>
      <Popup message="タスクが正常に作成されました。" showPopup={showPopup} />
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
          <LikeOrUnLikeButtonSwitchContainer taskId={String(task.id)} />
        </ListCover>
      ))}
    </>
  );
};

TasksList.propTypes = {
  showPopup: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
    endDate: PropTypes.string,
    startDate: PropTypes.string,
    status: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;