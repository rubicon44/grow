import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CreatedUser } from '../../atoms/Link/createdUser';

const ListStyle = styled.dl`
  min-width: 180px;
  text-align: left;

  > dt {
    font-weight: bold;
  }

  > dd {
    min-height: 100px;
    margin: 10px 0 5px;
    padding: 5px;
    border: 1px solid #bbb;
  }
`

export function List(props) {
  const title = props.title;
  const content = props.content;
  const link = props.link;
  return (
    <ListStyle>
      <dt>{title}</dt>
      <dd>{content}</dd>
      <CreatedUser link={link} />
    </ListStyle>
  )
}

List.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  content: PropTypes.string,
  link: PropTypes.object
};