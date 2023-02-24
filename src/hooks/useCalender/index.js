import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

export const useCalender = () => {
  const getDays = (year, month, blockNumber) => {
    const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
    let days = [];
    let date = dayjs(`${year}-${month}-01`);
    blockNumber = 1;
    let num = date.daysInMonth();
    for (let i = 0; i < num; i++) {
      days.push({
        day: date.date(),
        dayOfWeek: dayOfWeek[date.day()],
        blockNumber,
      });
      let dateFormat = date.format();
      date = dayjs(`${dateFormat}`).add(1, 'day');
      blockNumber++;
    };
    return days;
  };

  const [currentPositionNumber, setCurrentPositionNumber] = useState(0);
  const [preCurrentPositionNumber, setPreCurrentPositionNumber] = useState(0);
  const handleBackToPreviousMonthClick = () => {
    setPreCurrentPositionNumber(currentPositionNumber);
    setCurrentPositionNumber(currentPositionNumber - 1);
  };

  const handleForwardToNextMonthClick = () => {
    if(currentPositionNumber < 0) {
      setPreCurrentPositionNumber(currentPositionNumber);
      setCurrentPositionNumber(currentPositionNumber + 1);
    };
  };

  const currentDateFunc = () => {
    const currentDate = new Date();
    return currentDate;
  };

  const currentDisplayYearFunc = () => {
    const currentDate = currentDateFunc();
    let year = currentDate.getFullYear();
    if(currentPositionNumber < 0) {
      year = year + currentPositionNumber;
    };
    return year;
  };

  const calenderDataFunc = () => {
    const year = currentDisplayYearFunc();
    const currentDate = currentDateFunc();
    // todo: 1月のカレンダー表示が消えている。1月のカレンダーを表示するとともに、「useGanttChart」の「scrollToCurrentDate」において、カレンダーの先頭月(1月)内で移動してしまう問題を解決したい(カレンダーが1月から12月まで表示されており、現在2月の場合、2月内で移動したいが、現状1月内で移動してしまう)。
    const month = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const lastMonth = new Date(currentYear, (12 - 1)).getMonth() + 1;
    const calenderData = {
      startMonth: `${year}-${month}`,
      endMonth: `${year}-${lastMonth}`,
      blockSize: 32,
      blockNumber: 0,
      calenders:[],
    };
    return calenderData;
  };

  const [calenders, setCalenders] = useState([]);
  const calenderData = calenderDataFunc();
  const getCalendar = () => {
    let blockNumber = 0;
    let days;
    let startMonth = dayjs(calenderData.startMonth);
    let endMonth = dayjs(calenderData.endMonth);
    let betweenMonth = endMonth.diff(startMonth, 'months');
    for (let i = 0; i <= betweenMonth; i++) {
      days = getDays(startMonth.year(), startMonth.format('MM'), blockNumber);
      calenderData.calenders.push({
        date: startMonth.format('YYYY年MM月'),
        year: startMonth.year(),
        month: startMonth.month(), //month(), 0,1..11と表示
        startBlockNumber: blockNumber,
        calender: days.length,
        days: days
      })
      let startMonthFormat = startMonth.format();
      startMonth = dayjs(`${startMonthFormat}`).add(1, 'months');
      blockNumber = days[days.length - 1].blockNumber;
      blockNumber++;
    };
    setCalenders(calenderData.calenders);
    return blockNumber;
  };

  const year = currentDisplayYearFunc();
  useEffect(() => {
    getCalendar();
  }, [year]);

  console.log(calenderData);

  return { calenderData, calenders, currentPositionNumber, handleBackToPreviousMonthClick, handleForwardToNextMonthClick, preCurrentPositionNumber, setCurrentPositionNumber, setPreCurrentPositionNumber, year };
};