import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CalenderTableBodyColorSwitch = ({ days }) => {
  if(days.dayOfWeek !== "土" && days.dayOfWeek !== "日") {
    return (
      <tr key={days.blockNumber}>
        <td>{days.dayOfWeek}</td>
        <td>{days.day}</td>
      </tr>
    );
  } else if(days.dayOfWeek === "土") {
    return (
      <ColoredBlueDayOfWeek key={days.blockNumber}>
        <td>{days.dayOfWeek}</td>
        <td>{days.day}</td>
      </ColoredBlueDayOfWeek>
    );
  } else if(days.dayOfWeek === "日") {
    return (
      <ColoredRedDayOfWeek key={days.blockNumber}>
        <td>{days.dayOfWeek}</td>
        <td>{days.day}</td>
      </ColoredRedDayOfWeek>
    );
  } else {
    return null;
  };
};

const ColoredBlueDayOfWeek = styled.tr`
  background: rgb(219 234 254);
`;

const ColoredRedDayOfWeek = styled.tr`
  background: rgb(254 226 226);
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