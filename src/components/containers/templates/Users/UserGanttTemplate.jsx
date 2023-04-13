import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HeaderContainer } from '../../organisms/common/HeaderContainer';
import { GanttChartContainer } from '../../organisms/tasks/GanttChartContainer';

export const UserGanttTemplate = ({ taskUser, userTasks }) => {
  return (
    <>
      <HeaderContainer />
      <Main>
        <GanttChartContainer taskUser={taskUser} userTasks={userTasks} />
      </Main>
    </>
  );
};

UserGanttTemplate.propTypes = {
  taskUser: PropTypes.exact({
    id: PropTypes.number.isRequired,
    firebase_id: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string.isRequired,
    like_tasks: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    })).isRequired,
    nickname: PropTypes.string.isRequired,
    password_digest: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    })).isRequired,
    username: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  }),
  userTasks: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  })).isRequired,
};

const Main = styled.main`
  text-align: center;
  background-color: #f8f7f3;
`;