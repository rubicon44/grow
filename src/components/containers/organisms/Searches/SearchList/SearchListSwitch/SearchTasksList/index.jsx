import PropTypes from "prop-types";
import styled from "styled-components";
import { TaskListItem } from "../../../../tasks/ui/TaskListItem";

export const SearchTasksList = ({
  model,
  outerElementTasksForSearchRef,
  searchPerformed,
  tasks,
}) =>
  tasks && tasks.length > 0
    ? tasks.map((task) => (
        <TaskListItem
          key={task.id}
          outerElementTasksRef={outerElementTasksForSearchRef}
          task={task}
        />
      ))
    : searchPerformed &&
      model === "task" && (
        <ListCover>
          <p>検索結果がありません</p>
        </ListCover>
      );

SearchTasksList.defaultProps = {
  outerElementTasksForSearchRef: null,
};

SearchTasksList.propTypes = {
  model: PropTypes.string.isRequired,
  outerElementTasksForSearchRef: PropTypes.objectOf(
    PropTypes.instanceOf(Element)
  ),
  searchPerformed: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      userId: PropTypes.string,
      content: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.string,
        avatarUrl: PropTypes.string,
        bio: PropTypes.string,
        email: PropTypes.string,
        nickname: PropTypes.string,
        username: PropTypes.string,
      }),
    })
  ).isRequired,
};

const ListCover = styled.div`
  padding: 20px;
`;
