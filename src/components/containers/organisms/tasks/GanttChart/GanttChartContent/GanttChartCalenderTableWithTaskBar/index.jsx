import { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CalenderTableBodyColorSwitch } from '../../CalenderTableBodyColorSwitch';
import { CalenderTableBodyColorSwitchForTBody } from '../../CalenderTableBodyColorSwitchForTBody';
import { GunttChartTaskBar } from './GunttChartTaskBar';

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
          {/* todo: 表示のためだけのHTMLのため削除予定。 */}
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

GanttChartCalenderTableWithTaskBar.propTypes = {
  calenderBodyHeight: PropTypes.number.isRequired,
  calenders: PropTypes.arrayOf(PropTypes.exact({
    calender: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    days: PropTypes.arrayOf(PropTypes.exact({
      blockNumber: PropTypes.number.isRequired,
      day: PropTypes.number.isRequired,
      dayOfWeek: PropTypes.string.isRequired,
    })),
    month: PropTypes.number.isRequired,
    startBlockNumber: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  })).isRequired,
  styles: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    taskStatus: PropTypes.number.isRequired,
    top: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  })).isRequired,
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