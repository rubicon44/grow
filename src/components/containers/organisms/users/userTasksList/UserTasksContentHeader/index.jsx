import styled from 'styled-components';
import { FollowButtonSwitchContainer } from 'components/containers/organisms/Users/UserButton/FollowButtonSwitch/FollowButtonSwitchContainer';
import { ProfileChangeContainer } from 'components/containers/organisms/Users/UserTasksList/UserTasksContentHeader/ProfileChange/ProfileChangeContainer';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';

export const UserTasksContentHeader = (props) => {
  const { currentUserId } = props;
  const { bioAble, editing, error, handleTextSubmit, inputRefs, isButtonDisabled, loading, revertUserBioFunc, setBioAbleFunc, userData } = props;
  const { moveToFollowers, moveToFollowings } = props;

  return (
    <ContentHeaderCover>
      <TitleWithBackArrowHeader>{userData.userNickName}</TitleWithBackArrowHeader>
      <FollowButtonSwitchContainer />
      <ProfileChangeContainer
        bioAble={bioAble}
        currentUserId={currentUserId}
        editing={editing}
        error={error}
        handleTextSubmit={handleTextSubmit}
        inputRefs={inputRefs}
        isButtonDisabled={isButtonDisabled}
        loading={loading}
        revertUserBioFunc={revertUserBioFunc}
        setBioAbleFunc={setBioAbleFunc}
        userData={userData}
      />
      <RelationshipsCover>
        <a onClick={moveToFollowings}>
          <span>フォロー中</span>
        </a>
        <a onClick={moveToFollowers}>
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