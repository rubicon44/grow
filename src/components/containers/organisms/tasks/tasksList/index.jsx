import { memo } from "react";
import PropTypes from "prop-types";
import { PopupContainer } from "../ui/PopupContainer";
import { TaskListItem } from "../ui/TaskListItem";

export const TasksList = memo(({ tasks }) => (
  <>
    <PopupContainer message="タスクが正常に作成されました。" />
    {tasks?.map((task) => (
      <TaskListItem task={task} key={task.id} />
    ))}
  </>
));

TasksList.displayName = "TasksList";

TasksList.propTypes = {
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
