import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function BaseLink(props) {
  const { url } = props;
  const { text } = props;
  return <Link to={`/${url}`}>{text}</Link>;
}

BaseLink.defaultProps = {
  url: '',
  text: '',
};

BaseLink.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};