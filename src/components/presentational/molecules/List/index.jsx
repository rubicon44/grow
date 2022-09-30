import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BaseLink } from '../../atoms/Link';

export function List(props) {
  const { title } = props;
  const { titleUrl } = props;
  const { content } = props;
  const { url } = props;
  const { text } = props;
  return (
    <BaseList>
      <dt>
        <Link to={titleUrl}>{title}</Link>
      </dt>
      <dd>{content}</dd>
      <CreatedUserCover>
        作成者:
        <BaseLink url={url}>{text}</BaseLink>
      </CreatedUserCover>
    </BaseList>
  );
}

const BaseList = styled.dl`
  min-width: 180px;
  max-width: 180px;
  margin-top: 15px;
  text-align: left;

  > dt {
    font-weight: bold;
  }

  > dd {
    min-height: 100px;
    margin: 10px 0 5px;
    padding: 5px;
    border: 1px solid #bbb;
    white-space: pre-wrap;
  }
`;

const CreatedUserCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

List.defaultProps = {
  title: '',
  titleUrl: '',
  content: '',
  url: '',
  text: '',
};

List.propTypes = {
  title: PropTypes.string,
  titleUrl: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
};