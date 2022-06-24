import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getUser, updateUser } from '../../../../infra/api';

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

export function ProfileSwitch(props) {
  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const userNameInUrl = locationPathName[locationPathName.length - 1];

  const { currentUserId } = props;
  const [userBio, setUserBio] = useState([]);
  const [userNickName, setUserNickName] = useState([]);
  const [userName, setUserName] = useState([]);
  const [userId, setUserId] = useState([]);
  const [userNameDefault, setUserNameDefault] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(userNameInUrl)
      .then((response) => {
        const userBio = response.data.user.bio;
        const userNickName = response.data.user.nickname;
        const userName = response.data.user.username;
        const userId = response.data.user.id;
        const userNameDefault = response.data.user.username;
        if (isMounted) setUserBio(userBio);
        if (isMounted) setUserNickName(userNickName);
        if (isMounted) setUserName(userName);
        if (isMounted) setUserId(String(userId));
        if (isMounted) setUserNameDefault(userNameDefault);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [userNameInUrl]);

  const [bioAble, setBioAble] = useState(true);
  const [load, setLoad] = useState(false);
  const updateUserFunc = (username, user) => {
    updateUser(username, user)
      .then((response) => {
        const userBio = response.data.user.bio;
        const userNickName = response.data.user.nickname;
        const userName = response.data.user.username
        setUserBio(userBio);
        setUserNickName(userNickName);
        setUserName(userName);
        setBioAble(true);
        setLoad(false);
      })
      // .catch();
      .catch(errors => {
        // console.log(errors);
        window.alert("このusernameはすでに登録されています。");
        setUserName(userNameDefault);
        setLoad(false);
      });
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    const username = userNameDefault;
    const user = { nickname: userNickName, username: userName, bio: userBio };
    updateUserFunc(username, user);
  };

  const revertUserBio = (userName) => {
    getUser(userName)
      .then((response) => {
        const userBio = response.data.user.bio;
        setUserBio(userBio);
      })
      .catch();
    // .catch((response) => {
    // });
    setBioAble(true);
  };

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
