import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediaquery } from '../../../../assets/styles/variable';

const ButtonStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 50px;
  background-color: #ff444f;

  ${mediaquery.desktop`
    width: 260px;
    height: 60px;
    font-size: 24px;
    line-height: 36px;
`}
`

export function NextTask(props) {
  return (
    <React.Fragment>
      {props.text === "タスク一覧" &&
        <ButtonStyle to="/tasks">{props.text}</ButtonStyle>
      }
      {props.text === "タスク登録" &&
        <ButtonStyle to="/tasks/create">{props.text}</ButtonStyle>
      }
    </React.Fragment>
  )
}