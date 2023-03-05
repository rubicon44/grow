import styled from 'styled-components';
import { FollowButtonSwitchContainer } from '../../userButton/FollowButtonSwitchContainer';
import { ProfileChangeContainer } from './ProfileChangeContainer';
import { TitleWithBackArrowHeader } from '../../../../../presentational/molecules/Header/TitleWithBackArrowHeader';

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
        <p onClick={moveToFollowings}>フォロー中</p>
        <p onClick={moveToFollowers}>フォロワー</p>
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
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  > p {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  > p:last-of-type {
    margin-left: 35px;
  }
`;