import { useState, useEffect, useRef } from 'react';
import { useTaskBars } from 'hooks/useTaskBars';

export const useGanttChart = (userTasks) => {
  const { calenders, currentPositionNumber, handleBackToPreviousMonthClick, handleForwardToNextMonthClick, preCurrentPositionNumber, setCurrentPositionNumber, setPreCurrentPositionNumber, styles } = useTaskBars(userTasks);
  // todo: calendersが2回出力される。
  // console.log(calenders);
  const elm = useRef(null);
  const elmOfCalenderTableCover = useRef(null);
  const [calenderBodyHeight, setCalenderBodyHeight] = useState();
  const updateCalenderBodyHeight = () => {
    const taskListBodyHeight = elm.current.getBoundingClientRect().height;
    setCalenderBodyHeight(taskListBodyHeight);
  };

  const scrollToCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const currentPosition = day * "32" - "32";
    document.getElementById("outer").scrollLeft = currentPosition;
  };

  const handleScrollToCurrentDate = () => {
    scrollToCurrentDate();
    setCurrentPositionNumber(0);
    setPreCurrentPositionNumber(0);
  };

  const scrollToStartOrEndPosition = () => {
    if (currentPositionNumber < preCurrentPositionNumber) {
      const totalWidth = calenders.reduce((acc, calender) => {
        return acc + calender.calender * 32;
      }, 0);
      const currentPosition = totalWidth;
      document.getElementById("outer").scrollLeft = currentPosition;
    } else if (currentPositionNumber > preCurrentPositionNumber) {
      document.getElementById("outer").scrollLeft = 0;
    };
  };

  const [scrollToCurrentDateAble, setScrollToCurrentDateAble] = useState(false);
  useEffect(() => {
    updateCalenderBodyHeight();
    setScrollToCurrentDateAble(true);
  }, []);

  useEffect(() => {
    scrollToCurrentDate();
  }, [scrollToCurrentDateAble]);

  const years = calenders.map(calender => calender.year);
  const uniqueYears = Array.from(new Set(years));
  useEffect(() => {
    scrollToStartOrEndPosition();
  }, [uniqueYears, currentPositionNumber, preCurrentPositionNumber]);

  return { calenderBodyHeight, calenders, elm, elmOfCalenderTableCover, handleBackToPreviousMonthClick, handleForwardToNextMonthClick, handleScrollToCurrentDate, styles };
};