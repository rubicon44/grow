import { useEffect } from "react";

export const useInfiniteScrollForLikedTasks = (
  activeTab,
  setDataType,
  setLikedTasksPage
) => {
  const handleScrollForLikedTasks = () => {
    const { scrollTop } = document.documentElement;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      setLikedTasksPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (activeTab === "likedTasks") {
      setDataType("likedTasks");
      window.addEventListener("scroll", handleScrollForLikedTasks);
    }

    return () => {
      window.removeEventListener("scroll", handleScrollForLikedTasks);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);
};
