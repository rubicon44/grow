import { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../../../../assets/styles/variable";

export const PcHeader = ({ clickedText, setClickedText, pcHeaderLinks }) => {
  const pcHeaderList = () => (
    <HeaderList>
      {pcHeaderLinks.map((headerLink) => (
        <Link
          to={headerLink.url}
          key={headerLink.url}
          onClick={() => setClickedText(headerLink.id)}
        >
          <li>
            {!clickedText || clickedText !== headerLink.id ? (
              <span>{headerLink.text}</span>
            ) : (
              <span>{headerLink.clickedText}</span>
            )}
          </li>
        </Link>
      ))}
    </HeaderList>
  );

  return ["top"].map((anchor) => (
    <Fragment key={anchor}>{pcHeaderList(anchor)}</Fragment>
  ));
};

PcHeader.defaultProps = {
  clickedText: null,
};

PcHeader.propTypes = {
  clickedText: PropTypes.string,
  pcHeaderLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      clickedText: PropTypes.node.isRequired,
      text: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  setClickedText: PropTypes.func.isRequired,
};

const HeaderList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${mediaquery.desk`
    flex-direction: column;
  `}
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;
