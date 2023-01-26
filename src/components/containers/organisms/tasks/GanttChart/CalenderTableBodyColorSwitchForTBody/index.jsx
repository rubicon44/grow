import styled from 'styled-components';

export const CalenderTableBodyColorSwitchForTBody = ({ days }) => {
  if(days.dayOfWeek !== "土" && days.dayOfWeek !== "日") {
    return (
      <ColoredDayOfWeek key={days.blockNumber}>
        <td></td>
        <td></td>
      </ColoredDayOfWeek>
    );
  } else if(days.dayOfWeek === "土") {
    return (
      <ColoredBlueDayOfWeek key={days.blockNumber}>
        <td></td>
        <td></td>
      </ColoredBlueDayOfWeek>
    );
  } else if(days.dayOfWeek === "日") {
    return (
      <ColoredRedDayOfWeek key={days.blockNumber}>
        <td></td>
        <td></td>
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

const ColoredDayOfWeek = styled.tr`
  background: #f8f7f3;
`;