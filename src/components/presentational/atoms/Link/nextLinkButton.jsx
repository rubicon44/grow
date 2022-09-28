import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaquery } from '../../../../assets/styles/variable';

export function NextLinkButton(props) {
  const { url } = props;
  const { text } = props;
  return <DangerLinkButton to={url}>{text}</DangerLinkButton>;
}

const DangerLinkButton = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 50px;
  background-color: #ff444f;

  ${mediaquery.desktop`
    width: 260px;
    height: 60px;
    font-size: 24px;
    line-height: 36px;
`}
`;

NextLinkButton.defaultProps = {
  url: '',
  text: '',
};

NextLinkButton.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};