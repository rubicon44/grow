import { memo } from "react";
import PropTypes from "prop-types";
import { TasksListHeader } from "./TasksListHeader";
import { TasksListContent } from "./TasksListContent";

export const TasksList = memo(
  ({ activeTab, followingUserTasks, handleTabChange, tasks }) => (
    <>
      <TasksListHeader
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />
      <TasksListContent
        activeTab={activeTab}
        followingUserTasks={followingUserTasks}
        tasks={tasks}
      />
    </>
  )
);

TasksList.displayName = "TasksList";

TasksList.propTypes = {
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
  handleTabChange: PropTypes.func.isRequired,
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
