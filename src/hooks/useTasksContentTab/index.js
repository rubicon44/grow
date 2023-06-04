import { useState } from "react";

export const useTasksContentTab = () => {
  const [activeTab, setActiveTab] = useState("tasks");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return {
    activeTab,
    handleTabChange,
  };
};
