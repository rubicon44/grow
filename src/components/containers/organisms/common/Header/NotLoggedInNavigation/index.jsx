import { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

export const NotLoggedInNavigation = ({
  clickedText,
  headerLinksForAuth,
  setClickedText,
}) => {
  const notLoggedInHeaderList = () => (
    <Header>
      {headerLinksForAuth.map((headerLink) => (
        <Link
          to={headerLink.url}
          key={headerLink.url}
          onClick={() => setClickedText(headerLink.id)}
        >
          {!clickedText || clickedText !== headerLink.id ? (
            <span>{headerLink.text}</span>
          ) : (
            <ClickedText>{headerLink.text}</ClickedText>
          )}
        </Link>
      ))}
    </Header>
  );

  return ["top"].map((anchor) => (
    <Fragment key={anchor}>{notLoggedInHeaderList(anchor)}</Fragment>
  ));
};

NotLoggedInNavigation.defaultProps = {
  clickedText: null,
};

NotLoggedInNavigation.propTypes = {
  clickedText: PropTypes.string,
  headerLinksForAuth: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  setClickedText: PropTypes.func.isRequired,
};

const ClickedText = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`;

const Header = styled.header`
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
