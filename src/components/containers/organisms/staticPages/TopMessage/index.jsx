import styled from "styled-components";

export const TopMessage = () => (
  <TopMessageCover>
    <p>
      Growは、様々な人のタスクの管理方法を知ることができる、タスク管理SNSアプリケーションです。
    </p>
    <p>
      サービスをお試しの方は、ログイン画面から「テストユーザー」でログインすることができます。
    </p>
  </TopMessageCover>
);

const TopMessageCover = styled.div`
  > p {
    margin-top: 20px;
  }
`;
