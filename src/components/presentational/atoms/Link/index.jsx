import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BaseLink = ({ children, className, url }) => {
  return <Link className={className} to={url} >{children}</Link>;
};

BaseLink.defaultProps = {
  url: '',
  text: '',
};

BaseLink.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};