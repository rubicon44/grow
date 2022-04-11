import { useCallback, useMemo, useState } from 'react';

// 余白が発生しないように画面外に余分にアイテムを表示しておく
const EXTRA_ITEM_COUNT = 1;

export function useVirtualScroll(props) {
  const { containerHeight } = props;
  const { itemHeight } = props;
  const { items } = props;

  const [startIndex, setStartIndex] = useState(0);
  const maxDisplayCount = Math.floor(
    containerHeight / itemHeight + EXTRA_ITEM_COUNT
  );

  const handleScroll = useCallback(
    (e) => {
      const { scrollLeft } = e.target;
      const nextStartIndex = Math.floor(scrollLeft / itemHeight);
      setStartIndex(nextStartIndex);
    }
  );

  const displayingItems = useMemo(
    () => items.slice(startIndex, startIndex + maxDisplayCount)
  );

  // console.log(startIndex);
  // console.log(maxDisplayCount)

  return { handleScroll, displayingItems, startIndex };
};