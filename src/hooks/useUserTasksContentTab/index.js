import { useState } from "react";

export const useUserTasksContentTab = () => {
  const [activeTab, setActiveTab] = useState("createdTasks");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return {
    activeTab,
    handleTabChange,
  };
};
