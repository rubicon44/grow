import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { UserTasks } from "../UserTasks";
import { GanttChartContainer } from "../../../../tasks/GanttChartContainer";
import { UserLikedTasks } from "../UserLikedTasks";

export const UserTasksContentList = ({ activeTab, userData }) => (
  <>
    {/* CreatedTasksList */}
    {activeTab === "createdTasks" && <UserTasks userData={userData} />}

    {/* GanttChartList */}
    {activeTab === "gantt" && (
      <Link to={`/${userData.username}/gantt`}>
        <GanttChatContainerCover>
          <GanttChartContainer />
        </GanttChatContainerCover>
      </Link>
    )}

    {/* LikedTasksList */}
    {activeTab === "likedTasks" && <UserLikedTasks userData={userData} />}
  </>
);

UserTasksContentList.propTypes = {
  activeTab: PropTypes.string.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    bio: PropTypes.string,
    email: PropTypes.string,
    likedTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        content: PropTypes.string,
        endDate: PropTypes.string,
        startDate: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    nickname: PropTypes.string,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        content: PropTypes.string,
        endDate: PropTypes.string,
        startDate: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    username: PropTypes.string,
  }).isRequired,
};

const GanttChatContainerCover = styled.div`
  min-height: 200px;
`;
