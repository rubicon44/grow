import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { UserTasks } from "../UserTasks";
import { GanttChartContainer } from "../../../../tasks/GanttChartContainer";
import { UserLikedTasks } from "../UserLikedTasks";

export const UserTasksContentList = ({ activeTab, userData }) => (
  <>
    {/* CreatedTasksList */}
    {activeTab === "createdTasks" && (
      <ul>
        <li>
          <UserTasks userData={userData} />
        </li>
      </ul>
    )}

    {/* GanttChartList */}
    {activeTab === "gantt" && (
      <ul>
        <Link to={`/${userData.username}/gantt`}>
          <GanttTabContent>
            <GanttChartContainer />
          </GanttTabContent>
        </Link>
      </ul>
    )}

    {/* LikedTasksList */}
    {activeTab === "likedTasks" && (
      <ul>
        <li>
          <UserLikedTasks userData={userData} />
        </li>
      </ul>
    )}
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

const GanttTabContent = styled.li`
  max-width: 320px;
`;
