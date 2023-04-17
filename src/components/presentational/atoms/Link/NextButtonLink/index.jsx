import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaquery } from '../../../../../assets/styles/variable';
import { BaseLink } from '../BaseLink';

export const NextButtonLink = ({ text, url }) => {
  return <DangerButtonLink url={url} >{text}</DangerButtonLink>;
};

NextButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const DangerButtonLink = styled(BaseLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
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