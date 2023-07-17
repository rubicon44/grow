import PropTypes from "prop-types";
import styled from "styled-components";

export const TasksListHeader = ({ activeTab, handleTabChange }) => (
  <Tab>
    <TabItem onClick={() => handleTabChange("tasks")}>
      <TabTaskInner>
        <span>全体</span>
        {activeTab === "tasks" && <ActiveTabHeaderBorderBottom />}
      </TabTaskInner>
    </TabItem>
    <TabItem onClick={() => handleTabChange("followingUserTasks")}>
      <TabTaskInner>
        <span>フォロー中</span>
        {activeTab === "followingUserTasks" && <ActiveTabHeaderBorderBottom />}
      </TabTaskInner>
    </TabItem>
  </Tab>
);

TasksListHeader.propTypes = {
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
const Tab = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-width: 320px;
  height: 53px;
  border-bottom: 1px solid #ddd;
`;

const TabItem = styled.div`
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

const TabTaskInner = styled.div`
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
