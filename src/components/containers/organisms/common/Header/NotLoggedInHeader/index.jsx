import { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

export const NotLoggedInHeader = ({
  clickedText,
  headerLinksForAuth,
  setClickedText,
}) => {
  const notLoggedInHeaderList = () => (
    <HeaderList>
      {headerLinksForAuth.map((headerLink) => (
        <Link
          to={headerLink.url}
          key={headerLink.url}
          onClick={() => setClickedText(headerLink.id)}
        >
          <li>
            {!clickedText || clickedText !== headerLink.id ? (
              <span>{headerLink.text}</span>
            ) : (
              <ClickeText>{headerLink.text}</ClickeText>
            )}
          </li>
        </Link>
      ))}
    </HeaderList>
  );

  return ["top"].map((anchor) => (
    <Fragment key={anchor}>{notLoggedInHeaderList(anchor)}</Fragment>
  ));
};

NotLoggedInHeader.defaultProps = {
  clickedText: null,
};

NotLoggedInHeader.propTypes = {
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

const ClickeText = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`;

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
