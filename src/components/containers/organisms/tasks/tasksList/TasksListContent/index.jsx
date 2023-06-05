import PropTypes from "prop-types";
import { PopupContainer } from "../../ui/PopupContainer";
import { TaskListItem } from "../../ui/TaskListItem";

export const TasksListContent = ({ activeTab, followingUserTasks, tasks }) => (
  <>
    <PopupContainer message="タスクが正常に作成されました。" />

    {activeTab === "tasks" &&
      tasks?.map((task) => <TaskListItem task={task} key={task.id} />)}

    {activeTab === "followingUserTasks" &&
      (followingUserTasks?.length > 0 ? (
        followingUserTasks.map((task) => (
          <TaskListItem task={task} key={task.id} />
        ))
      ) : (
        <p>フォローしているユーザーはいません。</p>
      ))}
  </>
);

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
