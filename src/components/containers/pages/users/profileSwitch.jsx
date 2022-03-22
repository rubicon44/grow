import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getUser } from '../../../../infra/api';
import { getCurrentUser } from '../../../../infra/api';
import { updateUser } from '../../../../infra/api';

// Profile
const Profile = styled.div`
  text-align: left;
  white-space: pre-wrap;
`

// Form
const FormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
`

const FormTextAreaCover = styled.div`
  margin-bottom: 10px;

  > label {
    display: block;
  }

  > textarea {
    min-width: 260px;
    min-height: 200px;
  }
`

const FormButtonCover = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ProfileSwitch = () => {
  const location = useLocation();
  const locationPathName = location.pathname.split("/");
  const user_id = locationPathName[locationPathName.length -1];

  const [taskUser, setTaskUser] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getUser(user_id)
    .then(response => {
      const taskUser = response.data.user;
      const userProfile = response.data.user.profile;
      if (isMounted) setTaskUser(taskUser);
      if (isMounted) setUserProfile(userProfile);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [user_id]);

  const updateUserFunc = useCallback((id, user) => {
    updateUser(id, user)
    .then(response => {
      console.log(response.data);
      const userProfile = response.data.user.profile;
      setUserProfile(userProfile);
    })
    .catch(response => {
      console.log(response.data);
    });
  }, []);

  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    const id = user_id;
    const user = { 'profile': userProfile };
    updateUserFunc(id, user);
    setProfileAble(true);
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

  const [profileAble, setProfileAble] = useState(true);
  if (profileAble === true) {
    return (<div>
             <Profile>{userProfile}</Profile>
             {currentUserId === user_id &&
               <div>
                 <button type="button" onClick={ (e) => { setProfileAble(false) }}>編集</button>
               </div>
             }
           </div>)
  } else {
    return (<React.Fragment>
             {currentUserId === user_id &&
               <FormCover>
                 <form onSubmit={handleTextSubmit}>
                   <FormTextAreaCover>
                     <label htmlFor="profile">プロフィール:</label>
                     <textarea name="profile" onChange={ (e) => { setUserProfile(e.target.value) }} placeholder="profile" cols="80" rows="3" defaultValue={userProfile}></textarea>
                   </FormTextAreaCover>
                   <FormButtonCover><button type="submit">保存</button></FormButtonCover>
                 </form>
               </FormCover>
             }
           </React.Fragment>)
  }
}