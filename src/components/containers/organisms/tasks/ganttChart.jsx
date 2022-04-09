import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { mediaquery } from '../../../../assets/styles/variable';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { Title } from '../../../presentational/atoms/Title/title';
import { TaskStatusSwitchText } from './taskStatusSwitchText';
import { CalenderTableBodyColorSwitch } from './calenderTableBodyColorSwitch';

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
  overflow: scroll;
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
  border-right: 2px solid #000;

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

const CalenderTaskBar = styled.div`
  position: absolute;
  top: 55px;
  width: 933px;
  height: 30px;

  > span {
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 4px;
    background-color: #fbd38d;
  }
`;

export function GunttChart(props) {
  // const [days, setDays] = useState([]);
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
    // setDays(days);
    return days;
  };

  const calenderData = {
    startMonth: '2022-04',
    endMonth: '2022-10',
    block_size: 30,
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
    // getDays('2022','4',0);
    getCalendar();
  }, []);

  const list = {
    start_month: '2022-04',
    end_month: '2022-08',
    block_size: 32,
    block_number: 0,
    calendars:[],
    inner_width:'',
    inner_height:'',
    task_width:'',
    task_height:'',
  };

  const { userTasks } = props;
  const [styles, setStyles] = useState([]);
  const taskBars = (userTasks) => {
    let start_date = dayjs(list.start_month);
    let top = 17;
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
        left = start * list.block_size;
        style = {
          top: `${top}px`,
          left: `${left}px`,
          width: `${list.block_size * between}px`,
        }
      }
      top = top + 65;

      return style;
    });
    setStyles(styleData);
    return {
      style,
      list
    }
    // });
    // console.log(aaa);
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
                  {/* <td>{task.startDate}</td>
                  <td>{task.endDate}</td> */}
                  <td>{taskUser.name}</td>
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
              {calenders.map((calender) => (
                <CalenderTable key={calender.date}>
                  <CalenderTableHead>
                    <tr>
                      <th>{calender.date}</th>
                    </tr>
                  </CalenderTableHead>
                  <CalenderTableBody style={{height: calenderHeight + 'px'}}>
                    {calender.days.map((days) => (
                      <CalenderTableBodyColorSwitch days={days} />
                    ))}
                  </CalenderTableBody>
                </CalenderTable>
              ))}
            </CalenderTableCover>
            <CalenderTaskBar>
              {styles.map((style) => (
                <span style={{top: style.top, left: style.left, width: style.width}}></span>
              ))}
            </CalenderTaskBar>
          </CalenderTableCoverWrapper>
        </GunttContent>
      </Content>
    </>
  );
};