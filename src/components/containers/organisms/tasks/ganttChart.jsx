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

const CalenderTableCover = styled.div`
  display: flex;
  overflow: scroll;
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
      height: 100px;
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

  // const list = {
  //   title: "タスク1",
  //   startDate: "2022-04-04",
  //   endDate: "2022-04-07",
  //   createdUser: "user3",
  //   status: "未対応",
  // };

  const list = {
    start_month: '2020-10',
    end_month: '2021-02',
    block_size: 30,
    block_number: 0,
    calendars:[],
    inner_width:'',
    inner_height:'',
    task_width:'',
    task_height:'',
  };

    const [style, setStyle] = useState([]);
  const taskBars = () => {
    let start_date = dayjs(list.start_month);
    let top = 10;
    let left;
    let between;
    let start;
    let style;
    // return lists.map(list => {
      style = {}
      // if(list.cat==='task'){
        let date_from = dayjs(list.start_date);
        let date_to = dayjs(list.end_date);
        between = date_to.diff(date_from, 'days');
        between++;
        start = date_from.diff(start_date, 'days');
        left = start * list.block_size;
        style = {
          top: `${top}px`,
          left: `${left}px`,
          width: `${list.block_size * between}px`,
        }
      // }
      setStyle(style);
      top = top + 40;
      return {
        style,
        list
      }
    // })
  };

  useEffect(() => {
    taskBars();
  }, []);

  const { userTasks } = props;
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
              <th>完了期限日</th>
              <th>担当</th>
              <th>進捗</th>
            </tr>
          </GunttTaskTitle>
          <GunttTaskList>
            {userTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{}</td>
                <td>{}</td>
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
      </GunttContent>
    </div>
  );
}

// const AAA = styled.div`
// top: ${style.top};
// left: ${style.left};
// width: ${style.width};
// `;