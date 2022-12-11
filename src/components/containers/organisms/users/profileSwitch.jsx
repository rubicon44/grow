import React from 'react';
import styled from 'styled-components';

export const ProfileSwitch = (props) => {
  // todo: propsを変数に格納せずに取り出すのは、Formを適切に分割してから行う。
  const { currentUserId } = props;
  const { userId } = props;
  const { load } = props;
  const { handleTextSubmit } = props;
  const { revertUserBio } = props;
  const { userBio, setUserBio } = props;
  const { userNickName, setUserNickName } = props;
  const { userName, setUserName } = props;
  const { bioAble, setBioAble } = props;

  const setBioAbleFunc = () => {
    setBioAble(false);
  }

  const setUserNickNameFunc = (e) => {
    setUserNickName(e.target.value);
  }

  const setUserNameFunc = (e) => {
    setUserName(e.target.value);
  }

  const setUserBioFunc = (e) => {
    setUserBio(e.target.value);
  }

  const revertUserBioFunc = () => {
    revertUserBio();
  }

  if (bioAble === true) {
    return (
      <Profile>
        <ProfileHeader>
          {currentUserId === userId && (
            <BioChangeLinkCover>
              <BioChangeLink onClick={setBioAbleFunc}>
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
              <label htmlFor="nickname">ニックネーム
                <input
                  name="nickname"
                  onChange={setUserNickNameFunc}
                  placeholder="nickname"
                  cols="80"
                  rows="3"
                  defaultValue={userNickName}
                />
              </label>
              <label htmlFor="username">ユーザーネーム
                <input
                  name="username"
                  onChange={setUserNameFunc}
                  placeholder="username"
                  cols="80"
                  rows="3"
                  defaultValue={userName}
                />
              </label>
              <label htmlFor="bio">プロフィール
                <textarea
                  name="bio"
                  onChange={setUserBioFunc}
                  placeholder="bio"
                  cols="80"
                  rows="3"
                  defaultValue={userBio}
                />
              </label>
            </FormTextAreaCover>
            <FormButtonCover>
              <button type="button" onClick={revertUserBioFunc}>閉じる</button>
              {/* todo: 保存に合わせて、プロフィールの「自身が作成したタスク」「自身がいいねしたタスク」のニックネームを変更したい(現状、reloadすると変更される)。 */}
              <button type="submit" disabled={load}>保存</button>
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