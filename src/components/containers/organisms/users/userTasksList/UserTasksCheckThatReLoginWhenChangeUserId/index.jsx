import React from 'react';
import styled from 'styled-components';

export const UserTasksCheckThatReLoginWhenChangeUserId = ({ changeUserNameFunc, unChangeUserNameFunc}) => {
  return (
    <BackgroundDisAbledCover>
      <BackgroundDisAbled>
        <div>ユーザーIDの変更には際ログインが必要です。変更しますか？</div>
        <button type="button" onClick={changeUserNameFunc}>はい</button>
        <button type="button" onClick={unChangeUserNameFunc}>いいえ</button>
      </BackgroundDisAbled>
    </BackgroundDisAbledCover>
  )
};

const BackgroundDisAbledCover = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ddd;
`;

const BackgroundDisAbled = styled.div`
  margin: 30px;
  margin-top: 40%;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
`;