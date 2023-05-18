import PropTypes from "prop-types";
import styled from "styled-components";
import { FollowButtonSwitchContainer } from "../../userButton/FollowButtonSwitchContainer";
import { ProfileChangeContainer } from "./ProfileChangeContainer";
import { TitleWithBackArrowHeader } from "../../../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserTasksContentHeader = (props) => {
  const { currentUserId } = props;
  const {
    bioAble,
    editing,
    error,
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    loading,
    revertUserBioFunc,
    setBioAbleFunc,
    userData,
  } = props;
  const { moveToFollowers, moveToFollowings } = props;
  return (
    <ContentHeaderCover>
      <TitleWithBackArrowHeader>{userData.nickname}</TitleWithBackArrowHeader>
      <FollowButtonSwitchContainer userIdToFollowOrUnFollow={userData.id} />
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

UserTasksContentHeader.defaultProps = {
  error: false,
  editing: false,
  loading: false,
};

UserTasksContentHeader.propTypes = {
  bioAble: PropTypes.bool.isRequired,
  currentUserId: PropTypes.string.isRequired,
  editing: PropTypes.bool,
  error: PropTypes.bool,
  handleTextSubmit: PropTypes.func.isRequired,
  inputRefs: PropTypes.shape({
    bioRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    nicknameRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    usernameRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
  }).isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  moveToFollowings: PropTypes.func.isRequired,
  moveToFollowers: PropTypes.func.isRequired,
  revertUserBioFunc: PropTypes.func.isRequired,
  setBioAbleFunc: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    bio: PropTypes.string,
    email: PropTypes.string,
    likedTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        content: PropTypes.string,
        endDate: PropTypes.string,
        startDate: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    nickname: PropTypes.string,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        content: PropTypes.string,
        endDate: PropTypes.string,
        startDate: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    username: PropTypes.string,
  }).isRequired,
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
