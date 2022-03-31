import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkStyle = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  text-decoration: underline;
`;

export function NextLink(props) {
  const { url } = props;
  const { text } = props;
  return <LinkStyle to={url}>{text}</LinkStyle>;
}

NextLink.defaultProps = {
  url: '',
  text: '',
};

NextLink.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};
