import React from 'react';
import styled from 'styled-components';
import { BioEditLink } from './bioEditLink';
import { ProfileSwitchForm } from './profileSwitchForm';

export const ProfileSwitch = (props) => {
  const { currentUserId } = props;
  const { bioAble, setBioAble } = props;
  const { userId, userNickName, userName, userBio } = props.userData;

  const setBioAbleFunc = () => {
    setBioAble(false);
  }

  if (bioAble === true) {
    return (
      <Profile>
        <div>
          {currentUserId === userId && (<BioEditLink setBioAbleFunc={setBioAbleFunc} />)}
        </div>
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
      {currentUserId === userId && (<ProfileSwitchForm {...props} />)}
    </>
  );
}

const Profile = styled.div`
  width: 100%;
  margin-bottom: 30px;
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