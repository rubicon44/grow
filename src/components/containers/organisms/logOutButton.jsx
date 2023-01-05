import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSignOut } from 'hooks/useSignOut';
import { Button } from 'components/presentational/atoms/Button';

export const LogOutButton = ({ text }) => {
  const { signoutFunc } = useSignOut();
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