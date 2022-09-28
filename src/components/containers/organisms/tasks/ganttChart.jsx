import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { mediaquery } from '../../../../assets/styles/variable';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { Title } from '../../../presentational/atoms/Title';
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

  // Calender月の総数は、サービス開始から10年の日付とする。
  // Calenderの通常時のstart位置は、今日の日付とする。
  const calenderData = {
    startMonth: '2022-04',
    endMonth: '2025-10',
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
  const elm2 = useRef([]);
  const items = calenders;

  const [itemCalenderWidthArray, setItemCalenderWidthArray] = useState([]);
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
  }, [items]);

const getItemSize = (index) => {
  if(index >= 3) {
    return itemCalenderWidthArray[index];
  } else if(index < 3) {
    if(index == 0) {
      return 960;
    }

    if(index == 1) {
      return 992;
    }

    if(index == 2) {
      return 960;
      // todo: 下記がundefinedになっている。おそらく、useEffectの依存配列がitemsになっていて、それが実行される前に、このgetItemSizeが呼び出されているためだと思う。
      // 使えるようにするためには、上記を改善する必要がある。
      // return itemCalenderWidthArray[2];
    }
  }
  return 960;
};

const Column = ({ index, style, data }) => (
  <>
    <div style={style}>
      <CalenderTable ref={elm2}>
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
);

const Example = () => (
  <List
    layout="horizontal"
    direction="ltr"
    height={443}
    itemData={items}
    itemCount={items.length}
    itemSize={(index) => (getItemSize(index))}
    width={919}
  >
    {Column}
  </List>
);

  return (
    <>
      <ContentHeaderCover>
        <ContentHeader>
          <BackButton />
          <Title title="ガントチャート" />
        </ContentHeader>
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

          {/* 1ヶ月のみ */}
          {/* {days.map((days) => (
            <div key={days.blockNumber}>
              <div>{days.dayOfWeek}</div>
              <div>{days.day}</div>
            </div>
          ))} */}
          {/* 4ヶ月分 */}
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

const ContentHeader = styled.div`
  display: flex;
  width: 100%;

  > h2 {
    width: 100%;
    margin-right: 45px;
  }
`;

const ContentHeaderCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 260px;
  padding: 30px 10px 0;
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

const CalenderTableHead = styled.thead`
`;

const CalenderTableBody = styled.tbody`
`;

const CalenderTaskBar = styled.span`
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 4px;
  background-color: #fbd38d;
`;