import React from 'react';
import styled from 'styled-components';

export function ProfileSwitch(props) {
  const { currentUserId } = props;
  const { userBio } = props;
  const { userNickName } = props;
  const { setUserNickName } = props;
  const { userName } = props;
  const { setUserName } = props;
  const { userId } = props;
  const { bioAble } = props;
  const { setBioAble } = props;
  const { load } = props;
  const { handleTextSubmit } = props;
  const { revertUserBio } = props;

  if (bioAble === true) {
    return (
      <Profile>
        <ProfileHeader>
          {currentUserId === userId && (
            <BioChangeLinkCover>
              <BioChangeLink
                onClick={() => {
                  setBioAble(false);
                }}
              >
                <span>プロフィールを編集</span>
              </BioChangeLink>
            </BioChangeLinkCover>
          )}
        </ProfileHeader>
        <ProfileContent>
          <UserNickName>{userNickName}</UserNickName>
          <UserNickName>{userName}</UserNickName>
          <Bio>{userBio}</Bio>
        </ProfileContent>
      </Profile>
    );
  }
  return (
    <>
      {currentUserId === userId && (
        <FormCover>
          <form onSubmit={handleTextSubmit}>
            <FormTextAreaCover>
              <label htmlFor="nickname">
                ニックネーム
                <input
                  name="nickname"
                  onChange={(e) => {
                    setUserNickName(e.target.value);
                  }}
                  placeholder="nickname"
                  cols="80"
                  rows="3"
                  defaultValue={userNickName}
                />
              </label>
              <label htmlFor="username">
                ユーザーネーム
                <input
                  name="username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  placeholder="username"
                  cols="80"
                  rows="3"
                  defaultValue={userName}
                />
              </label>
              <label htmlFor="bio">
                プロフィール
                <textarea
                  name="bio"
                  onChange={(e) => {
                    setUserBio(e.target.value);
                  }}
                  placeholder="bio"
                  cols="80"
                  rows="3"
                  defaultValue={userBio}
                />
              </label>
            </FormTextAreaCover>
            <FormButtonCover>
              <button
                type="button"
                onClick={() => {
                  revertUserBio(userName);
                }}
              >
                閉じる
              </button>
              <button type="submit" disabled={load}>
                保存
              </button>
            </FormButtonCover>
          </form>
        </FormCover>
      )}
    </>
  );
}

const Profile = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
const ProfileHeader = styled.div``;

const BioChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BioChangeLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 168px;
  border: 1px solid black;
  border-color: rgb(207, 217, 222);
  border-radius: 9999px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
}
`;

const ProfileContent = styled.div`
  text-align: left;
`;

const UserNickName = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Bio = styled.div`
  white-space: pre-wrap;
`;

// Form
const FormCover = styled.div`
  text-align: left;
`;

const FormTextAreaCover = styled.div`
  margin-bottom: 10px;

  > label {
    display: block;
    margin-bottom: 10px;

    > textarea {
      min-height: 200px;
    }
  }
`;

const FormButtonCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px 0;
`;