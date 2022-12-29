import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AuthContext } from 'auth/AuthProvider';
import { Button } from 'components/presentational/atoms/Button';

export const LogOutButton = (props) => {
  const navigate = useNavigate();
  const { signout } = useContext(AuthContext);
  const { text } = props;

  const signoutFunc = async () => {
    await navigate('/');
    await signout();
  }

  return (<DangerButton onClick={signoutFunc}>{text}</DangerButton>);
}

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