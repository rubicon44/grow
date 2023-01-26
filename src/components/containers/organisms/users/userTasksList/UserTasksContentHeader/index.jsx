import styled from 'styled-components';
import { FollowButtonSwitchContainer } from 'components/containers/organisms/Users/UserButton/FollowButtonSwitch/FollowButtonSwitchContainer';
import { ProfileChange } from 'components/containers/organisms/Users/UserTasksList/UserTasksContentHeader/ProfileChange';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const UserTasksContentHeader = (props) => {
  const { title } = props;
  const { currentUserId, load } = props;
  const { handleTextSubmit } = props;
  const { bioAble } = props;
  const { userData } = props;
  const { nextFollowersFunc, nextFollowingsFunc } = props;
  const { revertUserBioFunc, setBioAbleFunc, setUserBioFunc, setUserNameFunc, setUserNickNameFunc } = props;
  return (
    <ContentHeaderCover>
      <TitleWithBackArrowHeader>{title}</TitleWithBackArrowHeader>
      <FollowButtonSwitchContainer />
      <ProfileChange
        currentUserId={currentUserId}
        load={load}
        handleTextSubmit={handleTextSubmit}
        bioAble={bioAble}
        userData={userData}
        revertUserBioFunc={revertUserBioFunc}
        setBioAbleFunc={setBioAbleFunc}
        setUserBioFunc={setUserBioFunc}
        setUserNameFunc={setUserNameFunc}
        setUserNickNameFunc={setUserNickNameFunc}
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
  );
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