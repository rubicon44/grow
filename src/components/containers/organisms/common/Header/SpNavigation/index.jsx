import { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

export const SpNavigation = ({
  clickedText,
  setClickedText,
  spNavigationLinks,
}) => {
  const SpNavigationList = () => (
    <NavigationList>
      {spNavigationLinks.map((headerLink) => (
        <Link
          to={headerLink.url}
          key={headerLink.url}
          onClick={() => setClickedText(headerLink.id)}
        >
          {!clickedText || clickedText !== headerLink.id ? (
            <span>{headerLink.text}</span>
          ) : (
            <span>{headerLink.clickedText}</span>
          )}
        </Link>
      ))}
    </NavigationList>
  );

  return ["top"].map((anchor) => (
    <Fragment key={anchor}>{SpNavigationList(anchor)}</Fragment>
  ));
};

SpNavigation.defaultProps = {
  clickedText: null,
};

SpNavigation.propTypes = {
  clickedText: PropTypes.string,
  setClickedText: PropTypes.func.isRequired,
  spNavigationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      clickedText: PropTypes.node.isRequired,
      text: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const NavigationList = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52.5px;
  box-sizing: border-box;
  border-top: 1px solid #ddd;
  background-color: #fff;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;
