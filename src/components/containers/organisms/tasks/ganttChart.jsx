import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { TaskStatusSwitchText } from './taskStatusSwitchText';
import { CalenderTableBodyColorSwitch } from './calenderTableBodyColorSwitch';

const GunttHeader = styled.div`
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
  background: #ed8077;
`;

const GunttTaskList = styled.tbody`
`;

const CalenderTableCoverWrapper = styled.div`
  position: relative;
  overflow: scroll;
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
    // todo: タスクの縦幅に合わせて動的にheightを変更(関数を作成し、stateで値を保持し、styleを直接コンポーネントに当てる。)。
    height: 275px;

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
    height: 10px;
    background: red;
    width: 30px;
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
    let top = 10;
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
      top = top + 40;

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

  const { taskUser } = props;

  return (
    <div>
      <GunttHeader>
        <h1>ガントチャート</h1>
      </GunttHeader>

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
          <GunttTaskList>
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
                <CalenderTableBody>
                  {calender.days.map((days) => (
                    <CalenderTableBodyColorSwitch days={days} />
                  ))}
                </CalenderTableBody>
              </CalenderTable>
            ))}
          </CalenderTableCover>
          <CalenderTaskBar>
            {styles.map((style) => (
              <span style={{top: style.top, left: style.left, width: style.width, height: 10, background: "red"}}></span>
            ))}
          </CalenderTaskBar>
        </CalenderTableCoverWrapper>
      </GunttContent>
    </div>
  );
};