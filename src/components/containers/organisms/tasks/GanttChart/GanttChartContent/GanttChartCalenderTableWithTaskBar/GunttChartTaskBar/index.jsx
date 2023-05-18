import PropTypes from "prop-types";
import styled from "styled-components";

export const GunttChartTaskBar = ({ styles }) => {
  return styles.map((style) => {
    const componentMap = {
      0: RedCalenderTaskBar,
      1: BlueCalenderTaskBar,
      2: GreenCalenderTaskBar,
      3: YellowGreenCalenderTaskBar,
    };
    const Component = componentMap[style.taskStatus];
    return (
      <Component
        key={style.id}
        style={{ top: style.top, left: style.left, width: style.width }}
      />
    );
  });
};

GunttChartTaskBar.propTypes = {
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

const CalenderTaskBar = styled.span`
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 4px;
  background-color: #fbd38d;
`;

const BlueCalenderTaskBar = styled(CalenderTaskBar)`
  background-color: #4484c5;
`;

const GreenCalenderTaskBar = styled(CalenderTaskBar)`
  background-color: #5eb5a6;
`;

const RedCalenderTaskBar = styled(CalenderTaskBar)`
  background-color: #ed8077;
`;

const YellowGreenCalenderTaskBar = styled(CalenderTaskBar)`
  background-color: #a1af2f;
`;
