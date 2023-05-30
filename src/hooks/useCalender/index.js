import { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";

export const useCalender = () => {
  const getDays = useCallback((year, month, initialBlockNumber) => {
    const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
    const days = [];
    let blockNumber = initialBlockNumber;
    let date = dayjs(`${year}-${month}-01`);
    const num = date.daysInMonth();
    for (let i = 0; i < num; i += 1) {
      days.push({
        day: date.date(),
        dayOfWeek: dayOfWeek[date.day()],
        blockNumber,
      });
      const dateFormat = date.format();
      date = dayjs(`${dateFormat}`).add(1, "day");
      blockNumber += 1;
    }
    return days;
  }, []);

  const [currentPositionNumber, setCurrentPositionNumber] = useState(0);
  const [preCurrentPositionNumber, setPreCurrentPositionNumber] = useState(0);
  const handleBackToPreviousMonthClick = () => {
    setPreCurrentPositionNumber(currentPositionNumber);
    setCurrentPositionNumber(currentPositionNumber - 1);
  };

  const handleForwardToNextMonthClick = () => {
    if (currentPositionNumber < 0) {
      setPreCurrentPositionNumber(currentPositionNumber);
      setCurrentPositionNumber(currentPositionNumber + 1);
    }
  };

  const currentDateFunc = useCallback(() => {
    const currentDate = new Date();
    return currentDate;
  }, []);

  const currentDisplayYearFunc = useCallback(() => {
    const currentDate = currentDateFunc();
    let year = currentDate.getFullYear();
    if (currentPositionNumber < 0) {
      year += currentPositionNumber;
    }
    return year;
  }, [currentDateFunc, currentPositionNumber]);

  const calenderDataFunc = useCallback(() => {
    const year = currentDisplayYearFunc();
    const currentDate = currentDateFunc();
    const currentYear = currentDate.getFullYear();
    const lastMonth = new Date(currentYear, 11, 31).getMonth() + 1;
    return {
      startMonth: `${year}-1`,
      endMonth: `${year}-${lastMonth}`,
      blockSize: 32,
      blockNumber: 0,
      calenders: [],
    };
  }, [currentDateFunc, currentDisplayYearFunc]);

  const [calenders, setCalenders] = useState([]);
  const calenderData = calenderDataFunc();
  const getCalendar = useCallback(() => {
    let blockNumber = 0;
    let days;
    let startMonth = dayjs(calenderData.startMonth);
    const endMonth = dayjs(calenderData.endMonth);
    const betweenMonth = endMonth.diff(startMonth, "months");
    const newCalenders = [...calenderData.calenders];
    for (let i = 0; i <= betweenMonth; i += 1) {
      days = getDays(startMonth.year(), startMonth.format("MM"), blockNumber);
      newCalenders.push({
        date: startMonth.format("YYYY年MM月"),
        year: startMonth.year(),
        month: startMonth.month(), // month(), 0,1..11と表示
        startBlockNumber: blockNumber,
        calender: days.length,
        days,
      });
      const startMonthFormat = startMonth.format();
      startMonth = dayjs(`${startMonthFormat}`).add(1, "months");
      blockNumber = days[days.length - 1].blockNumber;
      blockNumber += 1;
    }
    setCalenders(newCalenders);
    return blockNumber;
  }, [calenderData, getDays]);

  const year = currentDisplayYearFunc();
  useEffect(() => {
    getCalendar();
    // 無限ループを防ぐため、getCalender()をuseEffectの依存関係に含めない。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  return {
    calenderData,
    calenders,
    currentPositionNumber,
    handleBackToPreviousMonthClick,
    handleForwardToNextMonthClick,
    preCurrentPositionNumber,
    setCurrentPositionNumber,
    setPreCurrentPositionNumber,
  };
};
