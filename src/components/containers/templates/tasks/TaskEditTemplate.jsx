import PropTypes from "prop-types";
import { MainWithHeader } from "../MainWithHeader";
import { TaskEditFormContainer } from "../../organisms/tasks/TaskForm/TaskEditFormContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const TaskEditTemplate = ({ taskDataTask }) => (
  <MainWithHeader>
    <TitleWithBackArrowHeader title="編集" />
    <TaskEditFormContainer taskDataTask={taskDataTask} />
  </MainWithHeader>
);

TaskEditTemplate.propTypes = {
  taskDataTask: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
};
