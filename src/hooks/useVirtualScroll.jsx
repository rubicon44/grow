import { useCallback, useMemo, useState, useEffect } from 'react';

// 余白が発生しないように画面外に余分にアイテムを表示しておく
const EXTRA_ITEM_COUNT = 1;

export function useVirtualScroll(props) {
  const [calenderWidth, setCalenderWidth] = useState(960);
  const { elm2 } = props;
  const { items } = props;

  const [itemCalenderWidthArray, setItemCalenderWidthArray] = useState([]);
  // const [indexNumber, setIndexNumber] = useState(0);
  useEffect(() => {
    items.map((item) => {
      let calenderWidth;
      for (let i = 1; i < items.length; i++) {
        if(item.calender == 31) {
          calenderWidth = 992;
        } else if(item.calender == 30) {
          calenderWidth = 960;
        } else if(item.calender == 29) {
          calenderWidth = 928;
        } else if(item.calender == 28) {
          calenderWidth = 896;
        } else {
          calenderWidth = 0;
        }
      }
      itemCalenderWidthArray.push(calenderWidth);
    })
    console.log(itemCalenderWidthArray)
  }, [items]);

  // useEffect(() => {
  //   items.map((item) => {
  //     console.log(item.date);
  //     let indexNumber;
  //     // for (let i = 1; i <= 12; i++) {
  //       if(item.date.indexOf(1) > -1) {
  //         indexNumber = 0;
  //       } else if(item.date.indexOf(2) > -1) {
  //         indexNumber = 1;
  //       } else if(item.date.indexOf(3) > -1) {
  //         indexNumber = 2;
  //       } else if(item.date.indexOf(4) > -1) {
  //         indexNumber = 3;
  //       } else if(item.date.indexOf(5) > -1) {
  //         indexNumber = 4;
  //       } else if(item.date.indexOf(6) > -1) {
  //         indexNumber = 5;
  //       } else if(item.date.indexOf(7) > -1) {
  //         indexNumber = 6;
  //       } else if(item.date.indexOf(8) > -1) {
  //         indexNumber = 7;
  //       } else if(item.date.indexOf(9) > -1) {
  //         indexNumber = 8;
  //       } else if(item.date.indexOf(10) > -1) {
  //         indexNumber = 9;
  //       } else if(item.date.indexOf(11) > -1) {
  //         indexNumber = 10;
  //       } else if(item.date.indexOf(12) > -1) {
  //         indexNumber = 11;
  //       }
  //     // }
  //     console.log(indexNumber);
  //     setIndexNumber(indexNumber);
  //   })
  //   // console.log(itemCalenderWidthArray)
  // });

  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  // function aaa() {
  //   console.log("aaa");
  //   for (let i = 0; i < items.length; i++) {
  //     console.log("check");
  //     if(itemCalenderWidthArray[i] <= scrollLeft) {
  //       setCalenderWidth(itemCalenderWidthArray[i]);
  //       console.log("itemCalenderWidthArray[i]:" + itemCalenderWidthArray[i]);
  //       console.log("[i]:" + i);
  //       return itemCalenderWidthArray[i];
  //     }
  //     // else {
  //     //   setCalenderWidth(0);
  //     //   return 0;
  //     // }
  //   }
  // }

  const [scrollLeft, setScrollLeft] = useState(0);
  const getChildHeight = () => {
    // if(elm2.current[0]){
    //   return elm2.current[index].getBoundingClientRect().width;
    // } else {
    //   return 960;
    // }

    // if(scrollLeft == 0) {
    //   // setCalenderWidth(0);
    //   return 960;
    // }
    // for (let i = 0; i < items.length; i++) {
    //   // let aaa = [];
    //   // console.log("check");
    //   if(itemCalenderWidthArray[i] <= scrollLeft) {
    //     // aaa.push(itemCalenderWidthArray[i]);
    //     // console.log(itemCalenderWidthArray[i]);
    //     // return itemCalenderWidthArray[i];
    //   }
    // }

    // console.log("itemCalenderWidthArray[i]:" + itemCalenderWidthArray[i]);
    // console.log("[i]:" + i);
    // return calenderWidth;
    // setCalenderWidth(itemCalenderWidthArray[i]);
    // return itemCalenderWidthArray[i];

  //   let startRange = 0;
  //   let endRange = items.length - 1;
  //   while (endRange !== startRange) {
  //     const middle = Math.floor((endRange - startRange) / 2 + startRange);
  //     if (
  //       itemCalenderWidthArray[middle] <= scrollLeft &&
  //       itemCalenderWidthArray[middle + 1] > scrollLeft
  //     ) {
  //       return middle;
  //     }

  //     if (middle === startRange) {
  //       return endRange;
  //     } else {
  //       if (itemCalenderWidthArray[middle] <= scrollLeft) {
  //         startRange = middle;
  //       } else {
  //         endRange = middle;
  //       }
  //     }
  //   }
  //   return items.length;
  }

  // const childPositions = useMemo(() => {
  //   let calenderWidthArray = [];
  //   // calenderWidthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //   // calenderWidthArray = [994.5, 898.5, 994.5, 962.5, 994.5, 962.5, 994.5, 994.5, 962.5, 994.5, 962.5, 994.5];
  //   calenderWidthArray = [962.5, 994.5, 962.5, 994.5, 994.5, 962.5, 994.5, 962.5, 994.5, 994.5, 898.5, 994.5];

  //   let results = [0];
  //   // for (let i = 1; i < items.length; i++) {
  //     for (let i = 1; i < calenderWidthArray.length; i++) {
  //     // results.push(results[i - 1] + getChildHeight(i - 1));
  //     results.push(calenderWidthArray);
  //   }
  //   return results;
  // }, [getChildHeight, items.length]);
  // console.log(childPositions);
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー



  // const getCalenderWidth = useCallback((index) => {
  //   if(itemCalenderWidthArray[index]){
  //     // setCalenderWidth(elm2.current[index].getBoundingClientRect().width);
  //     return itemCalenderWidthArray[index];
  //   } else {
  //     return 960;
  //   }
  // }, [itemCalenderWidthArray]);

  // const getCalenderWidth = useCallback((index) => {
  //   if(elm2.current[0]){
  //     // setCalenderWidth(elm2.current[index].getBoundingClientRect().width);
  //     return elm2.current[index].getBoundingClientRect().width;
  //   } else {
  //     return 962.5;
  //   }
  // }, [elm2.current[0]]);
  // console.log("getCalnederWidth:" + getCalenderWidth(0));

  // const getCalenderWidth = useCallback(() => {
  //   if(elm2.current[0]){
  //     // setCalenderWidth(elm2.current[index].getBoundingClientRect().width);
  //     if(elm2.current[0].getBoundingClientRect().width == 992) {
  //       return 962.5;
  //     } else if(elm2.current[0].getBoundingClientRect().width == 960) {
  //       return 994.5;
  //     }
  //   } else {
  //     return 962.5;
  //   }
  // }, []);
  // console.log("getCalnederWidth:" + getCalenderWidth());

  const { containerHeight } = props;
  // const itemHeight = 978.5;

  // todo: indexNumberが動的に変われば良い。
  // const itemHeight = getCalenderWidth(indexNumber);
  // const itemHeight = getChildHeight(0);
  const itemHeight = getChildHeight();
  // console.log("itemHeight:" + itemHeight);
  // const itemHeight = 960;

  // const itemHeight = calenderWidth;
  // const { items } = props;

  const [startIndex, setStartIndex] = useState(0);
  // 2
  const maxDisplayCount = Math.floor(
    containerHeight / itemHeight + EXTRA_ITEM_COUNT
  );

  // const [scrollLeft, setScrollLeft] = useState(0);
  const handleScroll = useCallback(
    (e) => {
      const { scrollLeft } = e.target;
      setScrollLeft(scrollLeft);
      const nextStartIndex = Math.floor(scrollLeft / itemHeight);
      // console.log("scrollLeft / itemHeight:" + scrollLeft / itemHeight);
      // console.log("nextStartIndex:" + nextStartIndex);
      setStartIndex(nextStartIndex);
      console.log("フックス:startIndexが返される。");
      // console.log("962.5:" + (scrollLeft / 962.5));
      // console.log("994.5:" + (scrollLeft / 994.5));
    }, [itemHeight]
  );

  useEffect(() => {
    // if(scrollLeft == 0) {
    //   setCalenderWidth(0);
    // }

    if(
      itemCalenderWidthArray[startIndex] <= scrollLeft
      ) {
      // aaa.push(itemCalenderWidthArray[i]);
      // console.log(itemCalenderWidthArray[i]);
      // return itemCalenderWidthArray[i];
      setCalenderWidth(itemCalenderWidthArray[startIndex]);
    }
  }, [startIndex, scrollLeft]);
  // console.log("calenderWidth:" + calenderWidth);

  // useEffect(() => {
  //   // if(elm2.current[0]) {
  //   //   // setCalenderWidth(getCalenderWidth(0));
  //   //   setCalenderWidth(elm2.current[0].getBoundingClientRect().width);
  //   //   // console.log("setCalenderWidth:startIndexが変更されたため、calenderWidthが変更される。");
  //   // }
  //   // // setCalenderWidth(itemCalenderWidthArray[startIndex]);

  //   // for (let i = 0; i < items.length; i++) {
  //   //   if(itemCalenderWidthArray[i] <= scrollLeft) {
  //   //     setCalenderWidth(itemCalenderWidthArray[i]);
  //   //   } else if(itemCalenderWidthArray[i] === 0) {
  //   //     setCalenderWidth(0);
  //   //   }
  //   // }
  //   setCalenderWidth(962);
  // }, [startIndex]);
  // console.log("startIndex" + startIndex);
  // console.log("calenderWidth:" + calenderWidth);

  const [calenderPositionLeft, setCalenderPositionLeft] = useState(0);
  const [beforeIndex, setBeforeIndex] = useState(0);
  const [beforeCalenderWidth, setBeforeCalenderWidth] = useState(0);
  useEffect(() => {
    setBeforeIndex(startIndex);
    setBeforeCalenderWidth(calenderWidth);
    if(startIndex > beforeIndex) {
      let calenderPositionLeftAll = calenderPositionLeft + calenderWidth;
      setCalenderPositionLeft(calenderPositionLeftAll);
      // setCalenderPositionLeft(childPositions);
    }
    else if(startIndex < beforeIndex) {
      let calenderPositionLeftAll = calenderPositionLeft - beforeCalenderWidth;
      // let calenderPositionLeftAll = calenderPositionLeft - calenderWidth;
      setCalenderPositionLeft(calenderPositionLeftAll);
    } else if(beforeIndex == 0) {
      setCalenderPositionLeft(0);
    }

    // setCalenderPositionLeft(itemCalenderWidthArray[startIndex]);
    // console.log("setCalenderPositionLeft:startIndexが変更されたため、calenderPositionLeftが変更される。");

    // console.log("calenderPositionLeft:" + calenderPositionLeft);
  }, [startIndex]);

  // console.log("startIndex:" + startIndex);
  // // console.log("beforeIndex:" + beforeIndex);
  // // console.log("itemHeight:" + itemHeight);
  // console.log("calenderPositionLeft:" + calenderPositionLeft);

  // console.log("calenderWidth:" + calenderWidth);
  // console.log("beforeCalenderWidth:" + beforeCalenderWidth);

  // console.log(displayingItems);

  const displayingItems = useMemo(
    () =>
      // Math.floor(scrollLeft / itemHeight) > 0
      items.slice(startIndex, startIndex + maxDisplayCount)
      // , [startIndex, maxDisplayCount]
      // console.log("displayingItemsが返されました。")
  );
  // console.log("startIndex:" + startIndex);
  // console.log(displayingItems);

  return { handleScroll, displayingItems, startIndex, calenderPositionLeft };

  // ガガガッとなるのはなぜか？：useEffectの依存関係にstartIndexを設定しているため、2回以上startIndexが更新されると、それと同時にcalenderPositionLeftも更新されてします。
  // ではどうすれば良いか？：startIndexが1回しか更新されないようにするか、startIndex以外の値を依存関係に含める。
  // startIndexが1回しか更新されない方法は？：
  // startIndex以外の、依存関係にできる値は？：
};