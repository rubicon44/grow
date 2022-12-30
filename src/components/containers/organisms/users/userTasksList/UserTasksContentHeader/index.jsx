import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FollowButtonSwitch } from 'components/containers/organisms/Users/UserButton/FollowButtonSwitch';
import { ProfileSwitch } from 'components/containers/organisms/Users/UserTasksList/UserTasksContentHeader/ProfileSwitch';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const UserTasksContentHeader = (props) => {
  const navigate = useNavigate();
  const { title } = props;
  const { currentUserId, load } = props;
  const { handleTextSubmit, revertUserBio } = props;
  const { bioAble, setBioAble } = props;
  const { userData, setUserData } = props;

  const nextFollowingsFunc = () => {
    navigate(`/${userData.taskUser.username}/followings`, {
      state: {
        userId: userData.taskUser.id,
      },
    });
  };

  const nextFollowersFunc = () => {
    navigate(`/${userData.taskUser.username}/followers`, {
      state: {
        userId: userData.taskUser.id,
      },
    });
  };

  return (
    <ContentHeaderCover>
      <TitleWithBackArrowHeader>{title}</TitleWithBackArrowHeader>
      <FollowButtonSwitch currentUserId={currentUserId} />
      <ProfileSwitch
        currentUserId={currentUserId}
        load={load}
        handleTextSubmit={handleTextSubmit}
        revertUserBio={revertUserBio}
        bioAble={bioAble}
        setBioAble={setBioAble}
        userData={userData}
        setUserData={setUserData}
      />
      <RelationshipsCover>
        <a onClick={nextFollowingsFunc}>
          <span>フォロー中</span>
        </a>
        <a onClick={nextFollowersFunc}>
          <span>フォロワー</span>
        </a>
      </RelationshipsCover>
    </ContentHeaderCover>
  )
};

const ContentHeaderCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 260px;
  text-align: center;
  background-color: #f8f7f3;
`;

const RelationshipsCover = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  > a {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  > a:last-of-type {
    margin-left: 10px;
  }
`;