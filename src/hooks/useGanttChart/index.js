import { useCallback, useEffect, useRef, useState } from "react";
import { useTaskBars } from "../useTaskBars";

export const useGanttChart = (tasks, loading) => {
  const {
    calenders,
    currentPositionNumber,
    handleBackToPreviousMonthClick,
    handleForwardToNextMonthClick,
    preCurrentPositionNumber,
    setCurrentPositionNumber,
    setPreCurrentPositionNumber,
    styles,
  } = useTaskBars(tasks, loading);
  const elm = useRef(null);
  const elmOfCalenderTableCover = useRef(null);
  const [calenderBodyHeight, setCalenderBodyHeight] = useState(0);

  const updateCalenderBodyHeight = useCallback(() => {
    if (elm.current !== null) {
      const taskListBodyHeight = elm.current.getBoundingClientRect().height;
      setCalenderBodyHeight(taskListBodyHeight);
    }
    // todo: 代替案を検討(elm.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elm.current]);

  useEffect(() => {
    updateCalenderBodyHeight();
  }, [updateCalenderBodyHeight]);

  const scrollToCurrentDate = useCallback((calenders) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();
    const daysInCurrentMonth = new Date(currentYear, currentMonth, 0).getDate();
    const monthBeforeCurrent = calenders.filter(
      (calendar) => calendar.month < currentMonth
    );

    const years = calenders.map((calender) => calender.year);
    const uniqueYears = Array.from(new Set(years));
    const currentDisplayedYear = uniqueYears;
    let totalDaysBeforeCurrentMonth;
    if (
      (currentDisplayedYear % 4 === 0 && currentDisplayedYear % 100 !== 0) ||
      currentDisplayedYear % 400 === 0
    ) {
      totalDaysBeforeCurrentMonth =
        monthBeforeCurrent.reduce(
          (acc, calendar) => acc + calendar.calender,
          0
        ) - 1;
    } else {
      totalDaysBeforeCurrentMonth = monthBeforeCurrent.reduce(
        (acc, calendar) => acc + calendar.calender,
        0
      );
    }

    const CELL_WIDTH = 32;
    const currentPosition =
      currentDay * CELL_WIDTH -
      CELL_WIDTH +
      totalDaysBeforeCurrentMonth * CELL_WIDTH -
      daysInCurrentMonth * CELL_WIDTH;

    const outerElement = document.getElementById("outer");
    if (outerElement) {
      outerElement.scrollLeft = currentPosition;
    }
  }, []);

  useEffect(() => {
    scrollToCurrentDate(calenders);
    // todo: 代替案を検討(elm.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToCurrentDate, calenders, elm.current]);

  const handleScrollToCurrentDate = () => {
    scrollToCurrentDate(calenders);
    setCurrentPositionNumber(0);
    setPreCurrentPositionNumber(0);
  };

  const scrollToStartOrEndPosition = useCallback(() => {
    if (currentPositionNumber < preCurrentPositionNumber) {
      const totalWidth = calenders.reduce((acc, calender) => acc + calender.calender * 32, 0);
      const currentPosition = totalWidth;
      document.getElementById("outer").scrollLeft = currentPosition;
    } else if (currentPositionNumber > preCurrentPositionNumber) {
      document.getElementById("outer").scrollLeft = 0;
    }
  }, [calenders, currentPositionNumber, preCurrentPositionNumber]);

  useEffect(() => {
    scrollToStartOrEndPosition();
  }, [
    currentPositionNumber,
    preCurrentPositionNumber,
    scrollToStartOrEndPosition,
  ]);

  return {
    calenderBodyHeight,
    calenders,
    elm,
    elmOfCalenderTableCover,
    handleBackToPreviousMonthClick,
    handleForwardToNextMonthClick,
    handleScrollToCurrentDate,
    styles,
  };
};
