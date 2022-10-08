import React, { useState, useEffect, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { mediaquery } from '../../../../assets/styles/variable';
import { TitleWithBackArrowHeader } from '../../../presentational/molecules/Header/titleWithBackArrowHeader';
import { TaskStatusSwitchText } from './taskStatusSwitchText';
import { CalenderTableBodyColorSwitch } from './calenderTableBodyColorSwitch';
import { VariableSizeList as List } from 'react-window';

export function GunttChart(props) {
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
    }
    return days;
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const yearPlusOne = currentDate.getFullYear() + 1;
  const month = currentDate.getMonth() + 1;
  const calenderData = {
    startMonth: `${year}-${month}`,
    endMonth: `${yearPlusOne}-${month}`,
    blockSize: 32,
    blockNumber: 0,
    calenders:[],
  };

  const [calenders, setCalenders] = useState([]);
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
    }
    setCalenders(calenderData.calenders);
    return blockNumber;
  };

  useEffect(() => {
    getCalendar();
  }, []);

  const { userTasks } = props;
  const [styles, setStyles] = useState([]);
  const taskBars = (userTasks) => {
    let start_date = dayjs(calenderData.startMonth);
    // タスク期限バーの高さ
    // todo: 動的に変化させる
    let top = 17 + 33 + 17;
    let left;
    let between;
    let start;
    let style;
    style = {};
    const styleData = userTasks.map((task) => {
      if(task.start_date && task.end_date) {
        let date_from = dayjs(task.start_date);
        let date_to = dayjs(task.end_date);
        between = date_to.diff(date_from, 'days');
        between++;
        start = date_from.diff(start_date, 'days');
        left = start * calenderData.blockSize;
        style = {
          top: `${top}px`,
          left: `${left}px`,
          width: `${calenderData.blockSize * between}px`,
        }
      }
      top = top + 65;

      return style;
    });
    setStyles(styleData);
    return {
      style,
    }
  };

  useEffect(() => {
    taskBars(userTasks);
  }, [userTasks]);

  const elm = useRef(null);
  const [calenderHeight, setCalenderHeight] = useState();
  useEffect(() => {
    const calenderHeaderHeight = elm.current.getBoundingClientRect().height + 33;
    const plusCalenderHeaderHeight = JSON.stringify(calenderHeaderHeight);
    setCalenderHeight(plusCalenderHeaderHeight);
  }, [calenderHeight]);

  const { taskUser } = props;

  // 仮想スクロール用
  const items = calenders;
  const [itemCalenderWidthArray, setItemCalenderWidthArray] = useState([]);
  const [item0, setItem0] = useState([]);
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
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
      setItemCalenderWidthArray(itemCalenderWidthArray);
      setItem0(itemCalenderWidthArray[0]);
      setItem1(itemCalenderWidthArray[1]);
      setItem2(itemCalenderWidthArray[2]);
    })
  }, [items]);

const getItemSize = (index) => {
  // todo: 条件分岐をもっとわかりやすく修正する。
  // 最初はobject、setItemされた後はnumberが入っている(これが原因でエラーが起こっている模様)。
  if(typeof(item0) === "number") {
    if(index >= 3) {
      return itemCalenderWidthArray[index];
    } else if(index < 3) {
      if(index == 0) {
        return item0;
      }

      if(index == 1) {
        return item1;
      }

      if(index == 2) {
        return item2;
      }
    }
  }
  return 960;
};

const [moveTocurrentPositionAble, setMoveTocurrentPositionAble] = useState(false);
useEffect(() => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const currentPosition = day * '32' - '32';
  document.getElementById('outer').scrollLeft = currentPosition;
}, [moveTocurrentPositionAble]);

const Column = ({ index, style, data }) => {
  setMoveTocurrentPositionAble(true);
  return (
    <>
    <div style={style}>
      <CalenderTable>
        <thead>
          <tr>
            <th>{data[index].date}</th>
          </tr>
        </thead>
        <tbody style={{height: calenderHeight + 'px'}}>
          {data[index].days.map((days) => (
            <CalenderTableBodyColorSwitch days={days} />
          ))}
        </tbody>
      </CalenderTable>
    </div>
    {styles.map((style) => (
      <CalenderTaskBar style={{top: style.top, left: style.left, width: style.width}}></CalenderTaskBar>
    ))}
  </>
  )
};

const outerElementType = (props) => (
  <div id="outer" {...props} />
);

const Example = () => {
  return(
    <List
    outerElementType={outerElementType}
      layout="horizontal"
      direction="ltr"
      height={443}
      itemData={items}
      itemCount={items.length}
      itemSize={(index) => (getItemSize(index))}
      width={920}
    >
      {Column}
    </List>
  )
};

  return (
    <>
      <ContentHeaderCover>
        <TitleWithBackArrowHeader>ガントチャート</TitleWithBackArrowHeader>
      </ContentHeaderCover>

      <Content>
        <GunttContent>
          <GunttTask>
            <GunttTaskTitle>
              <tr>
                <th>タスク</th>
                <th>開始日</th>
                <th>終了日</th>
                <th>担当</th>
                <th>進捗</th>
              </tr>
            </GunttTaskTitle>
            <GunttTaskList ref={elm}>
              {userTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.start_date}</td>
                  <td>{task.end_date}</td>
                  <td>{taskUser.nickname}</td>
                  <td>
                    <TaskStatusSwitchText taskStatus={task.status} />
                  </td>
                </tr>
              ))}
            </GunttTaskList>
          </GunttTask>
          <CalenderTableCoverWrapper>
            <CalenderTableCover>
              <Example />
            </CalenderTableCover>
          </CalenderTableCoverWrapper>
        </GunttContent>
      </Content>
    </>
  );
};

const ContentHeaderCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 260px;
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`;

const Content = styled.div`
`;

const GunttContent = styled.div`
  display: flex;
`;

const GunttTask = styled.table`
  border: 1px solid;

  > thead, tbody {
    border: 1px solid;

    > tr > th, td {
      border: 1px solid;
    }
  }
`;

const GunttTaskTitle = styled.thead`
  height: 51px;
  background: #ed8077;
`;

const GunttTaskList = styled.tbody`
  > tr {
    height: 65px;
  }
`;

const CalenderTableCoverWrapper = styled.div`
  position: relative;
  overflow: scroll;

  ${mediaquery.desktop`
  width: 1500px;
`}
`;

const CalenderTableCover = styled.div`
  display: flex;
`;

const CalenderTable = styled.table`
  position: relative;
  // border-right: 2px solid #000;

  > thead, tbody {
    white-space: nowrap;

    > tr {
      border: 1px solid #ddd;
    }
  }

  > thead > tr {
    background: #7FCCE3;
  }

  > tbody {
    display: flex;

    > tr {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      width: 30px;
      border: 1px solid #ddd;

      > td:last-of-type {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;

const CalenderTaskBar = styled.span`
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 4px;
  background-color: #fbd38d;
`;