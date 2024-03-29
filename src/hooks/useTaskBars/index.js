import { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { useCalender } from "../useCalender";

export const useTaskBars = (tasks, loading) => {
  const {
    calenderData,
    calenders,
    currentPositionNumber,
    handleBackToPreviousMonthClick,
    handleForwardToNextMonthClick,
    preCurrentPositionNumber,
    setCurrentPositionNumber,
    setPreCurrentPositionNumber,
  } = useCalender();

  const addMonths = (startYear, startMonth, addMonthCount) =>
    new Date(startYear, startMonth + addMonthCount - 1);

  const getCurrentDisplayedTaskBar = (
    allDaysInTask,
    calenderDataBlockSize,
    termDay
  ) => {
    let currentDisplayedTaskBar =
      (allDaysInTask - termDay) * calenderDataBlockSize;
    if (currentDisplayedTaskBar < 0) {
      currentDisplayedTaskBar = 0;
    }
    return currentDisplayedTaskBar;
  };

  const getEndOfMonth = (year, month) => {
    const date = new Date(year, month, 0).getDate();
    return date;
  };

  const getTaskBarStyle = (
    calenderDataBlockSize,
    currentDisplayedTaskBar,
    index,
    startDate,
    taskStartDateForStyle,
    taskStatusForStyle
  ) => {
    // taskのheightを調整
    const top = 75 + index * 80;
    const dateFrom = dayjs(taskStartDateForStyle);
    const start = dateFrom.diff(startDate, "days");
    const left = start * calenderDataBlockSize;
    const width = currentDisplayedTaskBar;
    const uniqueId = Math.random().toString();
    const style = {
      id: `${uniqueId}`,
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      taskStatus: taskStatusForStyle,
    };
    return style;
  };

  const getTaskStartDate = (taskStartDate) => {
    const taskStartYear = Number(taskStartDate[0]);
    const taskStartMonth = Number(taskStartDate[1].replace(/^0/, ""));
    const taskStartDay = Number(taskStartDate[2].replace(/^0/, ""));
    return { taskStartYear, taskStartMonth, taskStartDay };
  };

  const getTaskEndDate = (taskEndDate) => {
    const taskEndYear = Number(taskEndDate[0]);
    const taskEndMonth = Number(taskEndDate[1].replace(/^0/, ""));
    const taskEndDay = Number(taskEndDate[2].replace(/^0/, ""));
    return { taskEndYear, taskEndMonth, taskEndDay };
  };

  const getCalenderEndDate = (calenderEndDate) => {
    const calenderEndYear = Number(calenderEndDate[0]);
    const calenderEndMonth = Number(calenderEndDate[1].replace(/^0/, ""));
    const calenderEndDay = Number(
      getEndOfMonth(calenderEndYear, calenderEndMonth)
    );
    return { calenderEndYear, calenderEndMonth, calenderEndDay };
  };

  const getTermDay = (lastDayInCurrentCalender, lastDayInTaskBar) => {
    if (lastDayInCurrentCalender < lastDayInTaskBar) {
      const termDay =
        (lastDayInTaskBar - lastDayInCurrentCalender) / (1000 * 60 * 60 * 24);
      return termDay;
    }
    const termDay = 0;
    return termDay;
  };

  const monthsBetween = (startYear, startMonth, endYear, endMonth) =>
    // return (12 - Ma + 1) + (12 - (12 - Mb)) + (Yb - Ya - 1) * 12;
    12 - startMonth + 1 + endMonth + (endYear - startYear - 1) * 12;

  const remainingDaysFromStart = (startday, EndOfMonth) =>
    EndOfMonth - startday + 1;

  const totalDaysBetween = (startYear, startMonth, totalMonths) => {
    let totalDays = 0;
    for (let i = 1; i <= totalMonths - 2; i += 1) {
      const yearMonth = addMonths(startYear, startMonth, i);
      const year = yearMonth.getFullYear();
      const month = yearMonth.getMonth() + 1;
      const endOfMonth = getEndOfMonth(year, month);
      totalDays += endOfMonth;
    }
    return totalDays;
  };

  const totalTaskDays = (
    daysInBetween,
    remainingStartMonthDays,
    startYear,
    startMonth,
    startDay,
    endYear,
    endMonth,
    endDay
  ) =>
    startYear === endYear && startMonth === endMonth
      ? endDay - startDay + 1
      : daysInBetween + remainingStartMonthDays + endDay;

  const [styles, setStyles] = useState([]);
  const taskBars = (tasks) => {
    const startDate = dayjs(calenderData.startMonth);
    const styleData = tasks.map((task, index) => {
      if (task.startDate && task.endDate) {
        const taskStartDate = getTaskStartDate(task.startDate.split(/[-|]/));
        const taskEndDate = getTaskEndDate(task.endDate.split(/[-|]/));
        const calenderEndDate = getCalenderEndDate(
          calenderData.endMonth.split(/[-|]/)
        );
        const { taskStartYear, taskStartMonth, taskStartDay } = taskStartDate;
        const { taskEndYear, taskEndMonth, taskEndDay } = taskEndDate;
        const { calenderEndYear, calenderEndMonth, calenderEndDay } =
          calenderEndDate;
        const TT = monthsBetween(
          taskStartYear,
          taskStartMonth,
          taskEndYear,
          taskEndMonth
        );
        const TsCeDiff = monthsBetween(
          taskStartYear,
          taskStartMonth,
          calenderEndYear,
          calenderEndMonth
        );
        // const diff = (TT - (TS ~ CE));
        const diff = TT - TsCeDiff;
        const totalMonths = TsCeDiff + diff;
        const allDaysInBetweenMonth = totalDaysBetween(
          taskStartYear,
          taskStartMonth,
          totalMonths
        );
        const EndOfMonth = getEndOfMonth(taskStartYear, taskStartMonth);
        const remainingStartMonthDays = remainingDaysFromStart(
          taskStartDay,
          EndOfMonth
        );
        const allDaysInTask = totalTaskDays(
          allDaysInBetweenMonth,
          remainingStartMonthDays,
          taskStartYear,
          taskStartMonth,
          taskStartDay,
          taskEndYear,
          taskEndMonth,
          taskEndDay
        );
        const lastDayInCurrentCalender = new Date(
          `${calenderEndYear}-${calenderEndMonth}-${calenderEndDay} 0:00`
        ); // Date関数のずれをなくす書き方
        const lastDayInTaskBar = new Date(
          `${taskEndYear}-${taskEndMonth}-${taskEndDay} 0:00`
        );
        const termDay = getTermDay(lastDayInCurrentCalender, lastDayInTaskBar);
        const calenderDataBlockSize = calenderData.blockSize;
        const currentDisplayedTaskBar = getCurrentDisplayedTaskBar(
          allDaysInTask,
          calenderDataBlockSize,
          termDay
        );
        const taskStartDateForStyle = task.startDate;
        const taskStatusForStyle = task.status;
        const style = getTaskBarStyle(
          calenderDataBlockSize,
          currentDisplayedTaskBar,
          index,
          startDate,
          taskStartDateForStyle,
          taskStatusForStyle
        );
        return style;
      }
      return null;
    });
    setStyles(styleData);
  };

  // todo1: loading以外に良い方法はないか検討。
  useEffect(() => {
    taskBars(tasks);
    // 無限ループを防ぐため、taskBars()をuseEffectの依存関係に含めない。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, currentPositionNumber]);

  return {
    calenders,
    currentPositionNumber,
    handleBackToPreviousMonthClick,
    handleForwardToNextMonthClick,
    preCurrentPositionNumber,
    setCurrentPositionNumber,
    setPreCurrentPositionNumber,
    styles,
  };
};
