import { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

export const SpHeader = ({ clickedText, setClickedText, spHeaderLinks }) => {
  const spHeaderList = () => (
    <HeaderList>
      {spHeaderLinks.map((headerLink) => (
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
    <Fragment key={anchor}>{spHeaderList(anchor)}</Fragment>
  ));
};

SpHeader.defaultProps = {
  clickedText: null,
};

SpHeader.propTypes = {
  clickedText: PropTypes.string,
  setClickedText: PropTypes.func.isRequired,
  spHeaderLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      clickedText: PropTypes.node.isRequired,
      text: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const HeaderList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;
