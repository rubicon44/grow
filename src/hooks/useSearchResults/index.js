import { useEffect, useState } from "react";
import { getSearches } from "../../infra/api";
import { useInfiniteScrollForTasksSearch } from "../useInfiniteScrollForTasksSearch";
import { useInfiniteScrollForUsersSearch } from "../useInfiniteScrollForUsersSearch";
import { useInputSanitization } from "../useInputSanitization";

export const useSearchResults = () => {
  const { sanitizeInput } = useInputSanitization();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [searchResults, setSearchResults] = useState({
    tasks: [],
    users: [],
  });
  const [model, setModel] = useState(null);
  const [contents, setContents] = useState("");
  const [dataType, setDataType] = useState("tasks");
  const [tasksForSearchPage, setTasksForSearchPage] = useState(1);
  const [usersForSearchPage, setUsersForSearchPage] = useState(1);
  const pageSize = 3;

  // modelの変更時にデータを空にする
  useEffect(() => {
    if (model === "user") {
      setTasksForSearchPage(1);
      setSearchResults({
        tasks: [],
        users: [],
      });
    }
    if (model === "task") {
      setUsersForSearchPage(1);
      setSearchResults({
        tasks: [],
        users: [],
      });
    }
    return () => {};
  }, [model]);

  const outerElementTasksForSearchRef = useInfiniteScrollForTasksSearch(
    isFetching,
    setTasksForSearchPage
  );

  const outerElementUsersForSearchRef = useInfiniteScrollForUsersSearch(
    isFetching,
    setUsersForSearchPage
  );

  const fetchSearchesData = async (searchData) => {
    setLoading(true);
    setError(null);
    setIsFetching(true);

    const pageNumber = () => {
      if (contents !== "") {
        return 1;
      }
      if (dataType === "tasks") {
        return tasksForSearchPage;
      }
      return usersForSearchPage;
    };

    try {
      const response = await getSearches(
        searchData,
        dataType,
        pageNumber(),
        pageSize
      );
      const searchResults = response.data;

      setSearchResults((prevSearchResults) => {
        const existingTasks = prevSearchResults.tasks || [];
        const existingUsers = prevSearchResults.users || [];

        let updatedTasks = [];
        let updatedUsers = [];

        if (dataType === "tasks") {
          // 重複するタスクを除外して新しいタスクを追加
          updatedTasks = searchResults.tasks
            ? [
                ...existingTasks,
                ...searchResults.tasks.filter(
                  (task) => !existingTasks.some((t) => t.id === task.id)
                ),
              ]
            : existingTasks;
        }

        if (dataType === "users") {
          // 重複するユーザーを除外して新しいユーザーを追加
          updatedUsers = searchResults.users
            ? [
                ...existingUsers,
                ...searchResults.users.filter(
                  (user) => !existingUsers.some((u) => u.id === user.id)
                ),
              ]
            : existingUsers;
        }

        return {
          tasks: updatedTasks,
          users: updatedUsers,
        };
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setIsButtonDisabled(false);
      setIsFetching(false);
    }
  };

  // contentsの有無に合わせてAPI実行
  useEffect(() => {
    if (
      outerElementTasksForSearchRef.current ||
      outerElementUsersForSearchRef.current
    ) {
      setTasksForSearchPage(1);
      setUsersForSearchPage(1);
      setSearchResults({
        tasks: [],
        users: [],
      });
      const method = "partial";
      const searchData = { model, contents, method };
      fetchSearchesData(searchData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contents, outerElementTasksForSearchRef, outerElementUsersForSearchRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    setIsButtonDisabled(true);
    const model = sanitizeInput(e.target.elements.model.value);
    setModel(model);
    const contents = sanitizeInput(e.target.elements.contents.value, {
      trim: true,
      ALLOWED_TAGS: [],
    });
    setContents(contents || "");
    const method = "partial";
    const searchData = { model, contents, method };

    fetchSearchesData(searchData);
  };

  const handleSelectChange = (e) => {
    if (e.target.value === "task") {
      setDataType("tasks");
    }
    if (e.target.value === "user") {
      setDataType("users");
    }
  };

  // 無限スクロール実行
  useEffect(() => {
    if (
      outerElementTasksForSearchRef.current ||
      outerElementUsersForSearchRef.current
    ) {
      const method = "partial";
      const searchData = { model, contents, method };

      fetchSearchesData(
        searchData,
        dataType,
        tasksForSearchPage,
        usersForSearchPage
      );
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dataType,
    model,
    tasksForSearchPage,
    usersForSearchPage,
    // fetchSearchesData,
  ]);

  return {
    error,
    handleSelectChange,
    handleSubmit,
    isButtonDisabled,
    loading,
    outerElementTasksForSearchRef,
    outerElementUsersForSearchRef,
    searchResultTasks: searchResults.tasks || [],
    searchResultUsers: searchResults.users || [],
  };
};
