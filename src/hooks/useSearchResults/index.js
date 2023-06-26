import { useEffect, useState } from "react";
import { getSearches } from "../../infra/api";
import { useInfiniteScrollForTasksSearch } from "../useInfiniteScrollForTasksSearch";
import { useInfiniteScrollForUsersSearch } from "../useInfiniteScrollForUsersSearch";
import { useInputSanitization } from "../useInputSanitization";
import { useHandleSuccessForSearches } from "../useHandleSuccessForSearches";
import { useUserDataTransformation } from "../useUserDataTransformation";

export const useSearchResults = () => {
  const { sanitizeInput } = useInputSanitization();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [model, setModel] = useState("");
  const [contents, setContents] = useState("");
  const [dataType, setDataType] = useState("tasks");
  const [tasksForSearchPage, setTasksForSearchPage] = useState(1);
  const [usersForSearchPage, setUsersForSearchPage] = useState(1);
  const pageSize = 10;
  const { handleSuccessForTasks, handleSuccessForUsers } =
    useHandleSuccessForSearches(setSearchResults);
  const {
    handleTransformedTasksForSearches,
    handleTransformedUsersForSearches,
  } = useUserDataTransformation();

  useEffect(() => {
    setModel("");
    // modelの変更時にデータを空にする
    setSearchResults([]);
    document.documentElement.scrollTop = 0;
  }, [dataType]);

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
      if (contents !== "") return 1;
      if (dataType === "tasks") return tasksForSearchPage;
      return usersForSearchPage;
    };

    try {
      const response = await getSearches(
        searchData,
        dataType,
        pageNumber(),
        pageSize
      );
      const searchResults = response.data || [];

      if (dataType === "tasks") {
        const transformedUserData =
          handleTransformedTasksForSearches(searchResults);
        handleSuccessForTasks(transformedUserData);
      }

      if (dataType === "users") {
        const transformedUserData =
          handleTransformedUsersForSearches(searchResults);
        handleSuccessForUsers(transformedUserData);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setIsButtonDisabled(false);
      setIsFetching(false);
      setSearchPerformed(true);
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
      setSearchResults([]);
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
    if (e.target.value === "task") setDataType("tasks");
    if (e.target.value === "user") setDataType("users");
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
    // dataType, model, fetchSearchesData,
    tasksForSearchPage,
    usersForSearchPage,
  ]);

  return {
    error,
    handleSelectChange,
    handleSubmit,
    isButtonDisabled,
    loading,
    model,
    outerElementTasksForSearchRef,
    outerElementUsersForSearchRef,
    searchPerformed,
    tasks: model === "task" ? searchResults : [],
    users: model === "user" ? searchResults : [],
  };
};
