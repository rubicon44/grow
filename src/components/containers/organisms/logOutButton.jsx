import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AuthContext } from '../../../auth/authProvider';
import { Button } from '../../presentational/atoms/Button';

export function LogOutButton(props) {
  const { signout } = useContext(AuthContext);
  const { text } = props;
  return (
    <DangerButton
      onClick={() => {
        signout();
      }}
    >
      {text}
    </DangerButton>
  );
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