import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BaseLink } from '../../atoms/Link/BaseLink';

export const List = ({ title, titleUrl, content, url, text }) => {
  return (
    <BaseList>
      <dt><Link to={titleUrl}>{title}</Link></dt>
      <dd>{content}</dd>
      <CreatedUserCover>作成者:
        <BaseLink url={url}>{text}</BaseLink>
      </CreatedUserCover>
    </BaseList>
  );
};

List.propTypes = {
  content: PropTypes.string.isRequired,
  text: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const BaseList = styled.dl`
  min-width: 180px;
  max-width: 180px;
  margin-top: 15px;
  text-align: left;
  word-wrap: break-word;
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