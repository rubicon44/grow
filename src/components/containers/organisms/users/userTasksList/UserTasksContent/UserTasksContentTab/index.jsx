import PropTypes from "prop-types";
import styled from "styled-components";

export const UserTasksContentTab = ({ activeTab, handleTabChange }) => (
  <UserProfileTab>
    <UserProfileTabItem onClick={() => handleTabChange("createdTasks")}>
      <UserProfileTabTaskInner>
        <span>タスク</span>
        {activeTab === "createdTasks" && <ActiveTabHeaderBorderBottom />}
      </UserProfileTabTaskInner>
    </UserProfileTabItem>
    <UserProfileTabItem onClick={() => handleTabChange("gantt")}>
      <UserProfileTabTaskInner>
        <span>チャート</span>
        {activeTab === "gantt" && <ActiveTabHeaderBorderBottom />}
      </UserProfileTabTaskInner>
    </UserProfileTabItem>
    <UserProfileTabItem onClick={() => handleTabChange("likedTasks")}>
      <UserProfileTabTaskInner>
        <span>いいね</span>
        {activeTab === "likedTasks" && <ActiveTabHeaderBorderBottom />}
      </UserProfileTabTaskInner>
    </UserProfileTabItem>
  </UserProfileTab>
);

UserTasksContentTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

const ActiveTabHeaderBorderBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: rgb(29, 155, 240);
`;

// 「jsx-a11y/no-noninteractive-element-to-interactive-role」エラー回避のためdivタグを使用
const UserProfileTab = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-width: 320px;
  max-width: 460px;
  height: 53px;
  border-bottom: 1px solid #ddd;
`;

const UserProfileTabItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
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
