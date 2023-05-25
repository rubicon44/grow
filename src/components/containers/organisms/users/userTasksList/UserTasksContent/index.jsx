import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { UserTasks } from "./UserTasks";
import { GanttChartContainer } from "../../../tasks/GanttChartContainer";
import { UserLikedTasks } from "./UserLikedTasks";

// todo: ファイル数削減(100行以下)
export const UserTasksContent = ({ userData }) => {
  // todo: state/関数位置の検討
  const [activeTab, setActiveTab] = useState("createdTasks");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* todo: タスクタブ内のタスクをいいねした際、いいねタブ内のタスクを即座に更新したい。 */}
      <UserProfileTab>
        <li>
          <UserProfileTabCover onClick={() => handleTabChange("createdTasks")}>
            <UserProfileTabTaskInner>
              <span>タスク</span>
              {activeTab === "createdTasks" && <ActiveTabHeaderBorderBottom />}
            </UserProfileTabTaskInner>
          </UserProfileTabCover>
        </li>
        <li>
          <UserProfileTabCover onClick={() => handleTabChange("gantt")}>
            <UserProfileTabTaskInner>
              <span>チャート</span>
              {activeTab === "gantt" && <ActiveTabHeaderBorderBottom />}
            </UserProfileTabTaskInner>
          </UserProfileTabCover>
        </li>
        <li>
          <UserProfileTabCover onClick={() => handleTabChange("likedTasks")}>
            <UserProfileTabTaskInner>
              <span>いいね</span>
              {activeTab === "likedTasks" && <ActiveTabHeaderBorderBottom />}
            </UserProfileTabTaskInner>
          </UserProfileTabCover>
        </li>
      </UserProfileTab>

      {activeTab === "createdTasks" && (
        <ul>
          <li>
            <UserTasks userData={userData} />
          </li>
        </ul>
      )}

      {activeTab === "gantt" && (
        <ul>
          <Link to={`/${userData.username}/gantt`}>
            <GanttTabContent>
              <GanttChartContainer />
            </GanttTabContent>
          </Link>
        </ul>
      )}

      {activeTab === "likedTasks" && (
        <ul>
          <li>
            <UserLikedTasks userData={userData} />
          </li>
        </ul>
      )}
    </>
  );
};

UserTasksContent.propTypes = {
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

const ActiveTabHeaderBorderBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: rgb(29, 155, 240);
`;

const GanttTabContent = styled.li`
  max-width: 320px;
`;

const UserProfileTab = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-width: 320px;
  max-width: 460px;
  height: 53px;
  border-bottom: 1px solid #ddd;

  > li {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    cursor: pointer;

    &:hover {
      background: #ddd;
    }
  }
`;

const UserProfileTabCover = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserProfileTabTaskInner = styled.div`
  position: relative;
  min-width: 56px;
  height: 100%;
  > span {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
`;
