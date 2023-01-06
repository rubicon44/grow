import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'components/presentational/atoms/Button';

export const LogOutButton = ({ signoutFunc, text }) => {
  return <DangerButton onClick={signoutFunc}>{text}</DangerButton>;
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