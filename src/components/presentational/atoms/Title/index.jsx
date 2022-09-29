import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export function Title(props) {
  const { title } = props;
  return <BaseTitle>{title}</BaseTitle>;
}

const BaseTitle = styled.h2`
  font-size: 36px;
  font-family: YuMincho;
`;

Title.defaultProps = {
  title: '',
};

Title.propTypes = {
  title: PropTypes.string,
};
