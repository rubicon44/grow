import { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CalenderTableBodyColorSwitch } from "../CalenderTableBodyColorSwitch";
import { GanttChartTaskBar } from "./GanttChartTaskBar";

export const GanttChartCalenderTableWithTaskBar = ({
  calenderBodyHeight,
  calenders,
  styles,
}) =>
  calenders.map((calender) => (
    <Fragment key={calender.date}>
      <GanttChartCalenderTable>
        <thead>
          <tr>
            <th>{calender.date}</th>
          </tr>
        </thead>
        <tbody style={{ height: `${calenderBodyHeight + 32}px` }}>
          {calender.days.map((days) => (
            <CalenderTableBodyColorSwitch key={days.blockNumber} days={days} />
          ))}
        </tbody>
      </GanttChartCalenderTable>
      <GanttChartTaskBar styles={styles} />
    </Fragment>
  ));

GanttChartCalenderTableWithTaskBar.propTypes = {
  calenderBodyHeight: PropTypes.number.isRequired,
  calenders: PropTypes.arrayOf(
    PropTypes.exact({
      calender: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      days: PropTypes.arrayOf(
        PropTypes.exact({
          blockNumber: PropTypes.number.isRequired,
          day: PropTypes.number.isRequired,
          dayOfWeek: PropTypes.string.isRequired,
        })
      ),
      month: PropTypes.number.isRequired,
      startBlockNumber: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
  styles: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      left: PropTypes.string.isRequired,
      taskStatus: PropTypes.number.isRequired,
      top: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const GanttChartCalenderTable = styled.table`
  > thead,
  tbody {
    text-align: center;
    white-space: nowrap;
  }
  > thead > tr {
    background: #7fcce3;
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
