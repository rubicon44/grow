import styled from 'styled-components';
import { ProfileChangeLink } from 'components/containers/organisms/Users/UserTasksList/UserTasksContentHeader/ProfileChange/ProfileChangeLink';
import { ProfileChangeForm } from 'components/containers/organisms/Users/UserTasksList/UserTasksContentHeader/ProfileChange/ProfileChangeForm';

export const ProfileChange = (props) => {
  const { currentUserId } = props;
  const { bioAble } = props;
  const { userId, userNickName, userName, userBio } = props.userData;
  const { setBioAbleFunc } = props;

  if (bioAble === true) {
    return (
      <Profile>
        <div>
          {currentUserId === userId && (<ProfileChangeLink setBioAbleFunc={setBioAbleFunc} />)}
        </div>
        <ProfileContent>
          <UserNickName>{userNickName}</UserNickName>
          <UserNickName>{userName}</UserNickName>
          <Bio>{userBio}</Bio>
        </ProfileContent>
      </Profile>
    );
  };
  return ( currentUserId === userId && (<ProfileChangeForm {...props} />) );
};

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