import { Fragment } from 'react';
import styled from 'styled-components';
import { CalenderTableBodyColorSwitch } from '../../calenderTableBodyColorSwitch';
import { CalenderTableBodyColorSwitchForTBody } from '../../calenderTableBodyColorSwitchForTBody';
import { GunttChartTaskBar } from './gunttChartTaskBar';

export const GanttChartCalenderTableWithTaskBar = ({ calenderBodyHeight, calenders, styles }) => {
  return (
    calenders.map((calender) => (
      <Fragment key={calender.date}>
        <GanttChartCalenderTable>
          <GanttChartCalenderTableHead>
            <tr>
              <th>{calender.date}</th>
            </tr>
            <GanttChartCalenderTableHeadDateCover>
              {calender.days.map((days) => (
                <CalenderTableBodyColorSwitch key={days.blockNumber} days={days} />
              ))}
            </GanttChartCalenderTableHeadDateCover>
          </GanttChartCalenderTableHead>
          <tbody style={{height: calenderBodyHeight + 'px'}}>
            {calender.days.map((days) => (
              <CalenderTableBodyColorSwitchForTBody key={days.blockNumber} days={days} />
            ))}
          </tbody>
        </GanttChartCalenderTable>
        <GunttChartTaskBar styles={styles} />
      </Fragment>
    ))
  );
};

const GanttChartCalenderTable = styled.table`
  > thead, tbody {
    white-space: nowrap;
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

const GanttChartCalenderTableHead = styled.thead`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
`;


const GanttChartCalenderTableHeadDateCover = styled.div`
  display: flex;
`;