import { useEffect, useRef } from "react";

export const useInfiniteScrollForUsersSearch = (
  isFetching,
  setUsersForSearchPage
) => {
  const outerElementUsersForSearchRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop } = document.documentElement;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight && !isFetching) {
      // 最下部にスクロールされ、データのロード中でない場合に次のページのデータを取得
      setUsersForSearchPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const outerElement = outerElementUsersForSearchRef.current;
    if (outerElement) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (outerElement) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outerElementUsersForSearchRef.current, isFetching]);

  return outerElementUsersForSearchRef;
};
