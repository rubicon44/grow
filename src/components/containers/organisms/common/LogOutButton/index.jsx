import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../../../../presentational/atoms/Button/index';

export const LogOutButton = ({ handleSignout, text }) => {
  return <DangerButton onClick={handleSignout}>{text}</DangerButton>;
};

// const DangerButton = styled(props => <Button {...props} />)`
const DangerButton = styled(Button)`
  background-color: #ff444f;
`;

LogOutButton.defaultProps = {
  text: '',
};

LogOutButton.propTypes = {
  text: PropTypes.string,
};