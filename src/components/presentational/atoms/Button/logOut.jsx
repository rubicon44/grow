import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../../../auth/authProvider';

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
`

export function LogOutButton(props) {
  const { signout } = useContext(AuthContext);

  return (
    <ButtonStyle onClick={() => { signout() }}>{props.text}</ButtonStyle>
  )
}