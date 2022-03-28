import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getUser } from '../../../../infra/api';
import { getCurrentUser } from '../../../../infra/api';
import { updateUser } from '../../../../infra/api';

const Profile = styled.div`
  margin-bottom: 30px;
`
const ProfileHeader = styled.div`
`

const BioChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`

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
`

const ProfileContent = styled.div`
  text-align: left;
`

const UserName = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`

const Bio = styled.div`
  white-space: pre-wrap;
`

// Form
const FormCover = styled.div`
  text-align: left;
`

const FormTextAreaCover = styled.div`
  margin-bottom: 10px;

  > label {
    display: block;
    margin-bottom: 10px;
  }

  > textarea {
    min-height: 200px;
  }
`

const FormButtonCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px 0;
`

export const ProfileSwitch = () => {
  const location = useLocation();
  const locationPathName = location.pathname.split("/");
  const user_id = locationPathName[locationPathName.length -1];

  const [taskUser, setTaskUser] = useState([]);
  const [userBio, setUserBio] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(user_id)
    .then(response => {
      const taskUser = response.data.user;
      const userBio = response.data.user.bio;
      if (isMounted) setTaskUser(taskUser);
      if (isMounted) setUserBio(userBio);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [user_id]);

  const updateUserFunc = (id, user) => {
    updateUser(id, user)
    .then(response => {
      console.log(response.data);
      const userBio = response.data.user.bio;
      setUserBio(userBio);
    })
    .catch(response => {
      console.log(response.data);
    });
  };

  const [load, setLoad] = useState(false);
  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    const id = user_id;
    const user = { 'bio': userBio };
    updateUserFunc(id, user);
    setBioAble(true);
    setLoad(false);
  }

  const [currentUserId, setCurrentUserId] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getCurrentUser()
    .then(response => {
      const currentUserId = String(response.data.user.id);
      if (isMounted) setCurrentUserId(currentUserId);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [currentUserId]);

  const revertUserBio = (user_id) => {
    getUser(user_id)
    .then(response => {
      const userBio = response.data.user.bio;
      setUserBio(userBio);
    })
    .catch(data => {
      console.log(data);
    });
    setBioAble(true);
  }

  const [bioAble, setBioAble] = useState(true);
  if (bioAble === true) {
    return (<Profile>
              <ProfileHeader>
                {currentUserId === user_id &&
                  <BioChangeLinkCover>
                    <BioChangeLink onClick={ (e) => { setBioAble(false) }}><span>プロフィールを編集</span></BioChangeLink>
                  </BioChangeLinkCover>
                }
              </ProfileHeader>
              <ProfileContent>
                <UserName>{taskUser.name}</UserName>
                <Bio>{userBio}</Bio>
              </ProfileContent>
           </Profile>)
  } else {
    return (<React.Fragment>
             {currentUserId === user_id &&
               <FormCover>
                 <form onSubmit={handleTextSubmit}>
                   <FormTextAreaCover>
                     <label htmlFor="bio">プロフィール</label>
                     <textarea name="bio" onChange={ (e) => { setUserBio(e.target.value) }} placeholder="bio" cols="80" rows="3" defaultValue={userBio}></textarea>
                   </FormTextAreaCover>
                   <FormButtonCover>
                     <button type="button" onClick={ () => { revertUserBio(user_id) } }>閉じる</button>
                     <button type="submit" disabled={load}>保存</button>
                   </FormButtonCover>
                 </form>
               </FormCover>
             }
           </React.Fragment>)
  }
}