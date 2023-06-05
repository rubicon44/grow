import PropTypes from "prop-types";
import { TaskListItem } from "./TaskListItem";
import { TaskDeleteOrUnDeleteButtonSwitch } from "../TaskButton/TaskDeleteOrUnDeleteButtonSwitch";
import { PopupContainer } from "../ui/PopupContainer";

export const TaskList = ({
  currentUserId,
  deleteCheckAble,
  deleteCheckFunc,
  deleteTaskFunc,
  isButtonDisabled,
  moveToEditTask,
  taskData,
  unDeleteCheckFunc,
}) => (
  <>
    <PopupContainer message="タスクが正常に更新されました。" />
    <TaskListItem
      currentUserId={currentUserId}
      deleteCheckFunc={deleteCheckFunc}
      isButtonDisabled={isButtonDisabled}
      moveToEditTask={moveToEditTask}
      task={taskData.task}
    />
    <TaskDeleteOrUnDeleteButtonSwitch
      deleteCheckAble={deleteCheckAble}
      deleteTaskFunc={deleteTaskFunc}
      unDeleteCheckFunc={unDeleteCheckFunc}
    />
  </>
);

TaskList.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  deleteCheckAble: PropTypes.bool.isRequired,
  deleteCheckFunc: PropTypes.func.isRequired,
  deleteTaskFunc: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  moveToEditTask: PropTypes.func.isRequired,
  taskData: PropTypes.shape({
    task: PropTypes.shape({
      // todo: string or numberに統一
      id: PropTypes.string.isRequired,
      content: PropTypes.string,
      endDate: PropTypes.string,
      startDate: PropTypes.string,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        bio: PropTypes.string,
        email: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }),
      userId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  unDeleteCheckFunc: PropTypes.func.isRequired,
};
