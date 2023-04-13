import { useCallback, useEffect, useRef, useState } from 'react';
import { useTaskBars } from '../useTaskBars';

export const useGanttChart = (userTasks) => {
  const { calenders, currentPositionNumber, handleBackToPreviousMonthClick, handleForwardToNextMonthClick, preCurrentPositionNumber, setCurrentPositionNumber, setPreCurrentPositionNumber, styles } = useTaskBars(userTasks);
  const elm = useRef(null);
  const elmOfCalenderTableCover = useRef(null);
  const [calenderBodyHeight, setCalenderBodyHeight] = useState();
  const updateCalenderBodyHeight = () => {
    const taskListBodyHeight = elm.current.getBoundingClientRect().height;
    setCalenderBodyHeight(taskListBodyHeight);
  };

  const scrollToCurrentDate = useCallback((calenders) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();
    const daysInCurrentMonth = new Date(currentYear, currentMonth, 0).getDate();
    const monthBeforeCurrent = calenders.filter((calendar) => calendar.month < currentMonth);

    const years = calenders.map(calender => calender.year);
    const uniqueYears = Array.from(new Set(years));
    const currentDisplayedYear = uniqueYears;
    let totalDaysBeforeCurrentMonth;
    if ((currentDisplayedYear % 4 === 0 && currentDisplayedYear % 100 !== 0) || currentDisplayedYear % 400 === 0) {
      totalDaysBeforeCurrentMonth = monthBeforeCurrent.reduce((acc, calendar) => acc + calendar.calender, 0) - 1;
    } else {
      totalDaysBeforeCurrentMonth = monthBeforeCurrent.reduce((acc, calendar) => acc + calendar.calender, 0);
    };

    const CELL_WIDTH = 32;
    const currentPosition = (currentDay * CELL_WIDTH - CELL_WIDTH) + (totalDaysBeforeCurrentMonth * CELL_WIDTH) - (daysInCurrentMonth * CELL_WIDTH);

    const outerElement = document.getElementById("outer");
    outerElement.scrollLeft = currentPosition;
  }, []);

  const handleScrollToCurrentDate = () => {
    scrollToCurrentDate(calenders);
    setCurrentPositionNumber(0);
    setPreCurrentPositionNumber(0);
  };

  const scrollToStartOrEndPosition = useCallback(() => {
    if (currentPositionNumber < preCurrentPositionNumber) {
      const totalWidth = calenders.reduce((acc, calender) => {
        return acc + calender.calender * 32;
      }, 0);
      const currentPosition = totalWidth;
      document.getElementById("outer").scrollLeft = currentPosition;
    } else if (currentPositionNumber > preCurrentPositionNumber) {
      document.getElementById("outer").scrollLeft = 0;
    };
  }, [calenders, currentPositionNumber, preCurrentPositionNumber]);

  const [scrollToCurrentDateAble, setScrollToCurrentDateAble] = useState(false);
  useEffect(() => {
    updateCalenderBodyHeight();
    setScrollToCurrentDateAble(true);
  }, []);

  useEffect(() => {
    scrollToCurrentDate(calenders);
  }, [scrollToCurrentDateAble, scrollToCurrentDate]);

  const years = calenders.map(calender => calender.year);
  const uniqueYears = Array.from(new Set(years));
  useEffect(() => {
    scrollToStartOrEndPosition();
  }, [uniqueYears, currentPositionNumber, preCurrentPositionNumber, scrollToStartOrEndPosition]);

  return { calenderBodyHeight, calenders, elm, elmOfCalenderTableCover, handleBackToPreviousMonthClick, handleForwardToNextMonthClick, handleScrollToCurrentDate, styles };
};