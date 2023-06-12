import { useEffect, useRef } from "react";

// 無限スクロール実行には、windowHeightの高さより高い要素を持つ必要がある
export const useInfiniteScrollForTasksSearch = (
  isFetching,
  setTasksForSearchPage
) => {
  const outerElementTasksForSearchRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop } = document.documentElement;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight && !isFetching) {
      // 最下部にスクロールされ、データのロード中でない場合に次のページのデータを取得
      setTasksForSearchPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const outerElement = outerElementTasksForSearchRef.current;
    if (outerElement) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (outerElement) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outerElementTasksForSearchRef.current, isFetching]);

  return outerElementTasksForSearchRef;
};
