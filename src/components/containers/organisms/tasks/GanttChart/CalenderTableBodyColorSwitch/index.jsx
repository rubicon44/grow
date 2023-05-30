import PropTypes from "prop-types";
import styled from "styled-components";

export const CalenderTableBodyColorSwitch = ({ days }) => {
  if (days.dayOfWeek !== "土" && days.dayOfWeek !== "日") {
    return (
      <ColoredDayOfWeek key={days.blockNumber}>
        <td>{days.dayOfWeek}</td>
        <td>{days.day}</td>
      </ColoredDayOfWeek>
    );
  }

  if (days.dayOfWeek === "土") {
    return (
      <ColoredBlueDayOfWeek key={days.blockNumber}>
        <td>{days.dayOfWeek}</td>
        <td>{days.day}</td>
      </ColoredBlueDayOfWeek>
    );
  }

  return (
    <ColoredRedDayOfWeek key={days.blockNumber}>
      <td>{days.dayOfWeek}</td>
      <td>{days.day}</td>
    </ColoredRedDayOfWeek>
  );
};

CalenderTableBodyColorSwitch.propTypes = {
  blockNumber: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  dayOfWeek: PropTypes.string.isRequired,
};

const ColoredBlueDayOfWeek = styled.tr`
  display: flex;
  flex-direction: column;
  width: 30px;
  border: 1px solid #ddd;
  background: rgb(219 234 254);
`;

const ColoredRedDayOfWeek = styled.tr`
  display: flex;
  flex-direction: column;
  width: 30px;
  border: 1px solid #ddd;
  background: rgb(254 226 226);
`;

const ColoredDayOfWeek = styled.tr`
  display: flex;
  flex-direction: column;
  width: 30px;
  border: 1px solid #ddd;
  background: #f8f7f3;
`;

CalenderTableBodyColorSwitch.defaultProps = {
  days: {},
};

CalenderTableBodyColorSwitch.propTypes = {
  days: PropTypes.exact({
    day: PropTypes.number,
    dayOfWeek: PropTypes.string,
    blockNumber: PropTypes.number,
  }),
};
