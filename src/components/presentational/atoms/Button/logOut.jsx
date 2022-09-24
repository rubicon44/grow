import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AuthContext } from '../../../../auth/authProvider';

export function LogOutButton(props) {
  const { signout } = useContext(AuthContext);
  const { text } = props;
  return (
    <ButtonStyle
      onClick={() => {
        signout();
      }}
    >
      {text}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  background-color: #ff444f;
`;

LogOutButton.defaultProps = {
  text: '',
};

LogOutButton.propTypes = {
  text: PropTypes.string,
};
