import PropTypes from "prop-types";
import { TaskListItem } from "../../../../tasks/ui/TaskListItem";

export const SearchTasksList = ({ outerElementTasksForSearchRef, tasks }) =>
  tasks &&
  tasks.map((task) => (
    <TaskListItem
      key={task.id}
      outerElementTasksRef={outerElementTasksForSearchRef}
      task={task}
    />
  ));

SearchTasksList.defaultProps = {
  outerElementTasksForSearchRef: null,
};

SearchTasksList.propTypes = {
  outerElementTasksForSearchRef: PropTypes.objectOf(
    PropTypes.instanceOf(Element)
  ),
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      userId: PropTypes.string,
      content: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.string,
        bio: PropTypes.string,
        email: PropTypes.string,
        nickname: PropTypes.string,
        username: PropTypes.string,
      }),
    })
  ).isRequired,
};
