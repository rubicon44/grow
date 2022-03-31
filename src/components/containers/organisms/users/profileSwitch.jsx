import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getUser, getCurrentUser, updateUser } from '../../../../infra/api';

const Profile = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
const ProfileHeader = styled.div`
`;

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

const UserName = styled.div`
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

export function ProfileSwitch() {
  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const userId = locationPathName[locationPathName.length - 1];

  const [taskUser, setTaskUser] = useState([]);
  const [userBio, setUserBio] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(userId)
      .then((response) => {
        const taskUser = response.data.user;
        const userBio = response.data.user.bio;
        if (isMounted) setTaskUser(taskUser);
        if (isMounted) setUserBio(userBio);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => { isMounted = false; };
  }, [userId]);

  const updateUserFunc = (id, user) => {
    updateUser(id, user)
      .then((response) => {
        const userBio = response.data.user.bio;
        setUserBio(userBio);
      })
      .catch();
    // .catch((response) => {
    // });
  };

  const [bioAble, setBioAble] = useState(true);
  const [load, setLoad] = useState(false);
  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    const id = userId;
    const user = { bio: userBio };
    updateUserFunc(id, user);
    setBioAble(true);
    setLoad(false);
  };

  const [currentUserId, setCurrentUserId] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
      .then((response) => {
        const currentUserId = String(response.data.user.id);
        if (isMounted) setCurrentUserId(currentUserId);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => { isMounted = false; };
  }, [currentUserId]);

  const revertUserBio = (userId) => {
    getUser(userId)
      .then((response) => {
        const userBio = response.data.user.bio;
        setUserBio(userBio);
      })
      .catch();
    // .catch((data) => {
    // });
    setBioAble(true);
  };

  if (bioAble === true) {
    return (
      <Profile>
        <ProfileHeader>
          {currentUserId === userId
                  && (
                  <BioChangeLinkCover>
                    <BioChangeLink onClick={() => { setBioAble(false); }}><span>プロフィールを編集</span></BioChangeLink>
                  </BioChangeLinkCover>
                  )}
        </ProfileHeader>
        <ProfileContent>
          <UserName>{taskUser.name}</UserName>
          <Bio>{userBio}</Bio>
        </ProfileContent>
      </Profile>
    );
  }
  return (
    <>
      {currentUserId === userId
               && (
               <FormCover>
                 <form onSubmit={handleTextSubmit}>
                   <FormTextAreaCover>
                     <label htmlFor="bio">
                       プロフィール
                       <textarea name="bio" onChange={(e) => { setUserBio(e.target.value); }} placeholder="bio" cols="80" rows="3" defaultValue={userBio} />
                     </label>
                   </FormTextAreaCover>
                   <FormButtonCover>
                     <button type="button" onClick={() => { revertUserBio(userId); }}>閉じる</button>
                     <button type="submit" disabled={load}>保存</button>
                   </FormButtonCover>
                 </form>
               </FormCover>
               )}
    </>
  );
}
