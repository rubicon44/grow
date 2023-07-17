import PropTypes from "prop-types";
import styled from "styled-components";
import { PopupContainer } from "../../ui/PopupContainer";
import { TaskListItem } from "../../ui/TaskListItem";

export const TasksListContent = ({
  activeTab,
  followingUserTasks,
  outerElementTasksRef,
  tasks,
}) => (
  <>
    <PopupContainer message="タスクが正常に作成されました。" />

    {activeTab === "tasks" &&
      tasks?.map((task) => (
        <TaskListItem
          outerElementTasksRef={outerElementTasksRef}
          task={task}
          key={task.id}
        />
      ))}

    {activeTab === "followingUserTasks" &&
      (followingUserTasks?.length > 0 ? (
        followingUserTasks.map((task) => (
          <TaskListItem task={task} key={task.id} />
        ))
      ) : (
        <ListCover>
          <p>フォローしているユーザーはいません。</p>
        </ListCover>
      ))}
  </>
);

TasksListContent.defaultProps = {
  outerElementTasksRef: null,
};

TasksListContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
  followingUserTasks: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      endDate: PropTypes.string,
      startDate: PropTypes.string,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  outerElementTasksRef: PropTypes.objectOf(PropTypes.instanceOf(Element)),
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      endDate: PropTypes.string,
      startDate: PropTypes.string,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const ListCover = styled.div`
  padding: 20px;
`;
