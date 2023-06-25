import styled from "styled-components";

export const TestUserInfo = () => (
  <TestUserTextCover>
    <TestUserTextTitle>テストユーザー</TestUserTextTitle>
    <p>
      <span>メールアドレス</span>
      ：test_user1@example.com
    </p>
    <p>
      <span>パスワード</span>
      ：123456
    </p>
    <p>※テストユーザーをご利用の方は、こちらの情報でログインしてください。</p>
  </TestUserTextCover>
);

const TestUserTextCover = styled.div`
  min-width: 260px;
  max-width: 360px;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  > p {
    margin-top: 20px;
    > span {
      display: inline-block;
      min-width: 110px;
      font-weight: bold;
    }
  }
`;

const TestUserTextTitle = styled.div`
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;
