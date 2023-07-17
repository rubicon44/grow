import PropTypes from "prop-types";
import styled from "styled-components";
import { ProfileChange } from "./ProfileChange";
import { UserRelationshipsLinks } from "./UserRelationshipsLinks";
import { UserTasksCheckReLoginWhenChangedUserId } from "../UserTasksCheckReLoginWhenChangedUserId";

export const UserTasksContentHeader = (props) => {
  const { currentUserId } = props;
  const {
    bioAble,
    changeUserNameCheckAble,
    changeUserNameFunc,
    handleFileChange,
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    revertUserBioFunc,
    setBioAbleFunc,
    userData,
  } = props;
  const { moveToFollowers, moveToFollowings } = props;
  return (
    <>
      <UserTasksCheckReLoginWhenChangedUserId
        changeUserNameCheckAble={changeUserNameCheckAble}
        changeUserNameFunc={changeUserNameFunc}
        revertUserBioFunc={revertUserBioFunc}
      />
      <ContentHeaderContainer>
        <ContentHeaderCover>
          <ProfileChange
            bioAble={bioAble}
            currentUserId={currentUserId}
            handleFileChange={handleFileChange}
            handleTextSubmit={handleTextSubmit}
            inputRefs={inputRefs}
            isButtonDisabled={isButtonDisabled}
            revertUserBioFunc={revertUserBioFunc}
            setBioAbleFunc={setBioAbleFunc}
            userData={userData}
          />
          <RelationshipsCover>
            <UserRelationshipsLinks
              moveToFollowers={moveToFollowers}
              moveToFollowings={moveToFollowings}
            />
          </RelationshipsCover>
        </ContentHeaderCover>
      </ContentHeaderContainer>
    </>
  );
};

UserTasksContentHeader.propTypes = {
  bioAble: PropTypes.bool.isRequired,
  changeUserNameCheckAble: PropTypes.bool.isRequired,
  changeUserNameFunc: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  handleTextSubmit: PropTypes.func.isRequired,
  inputRefs: PropTypes.shape({
    bioRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]).isRequired,
    nicknameRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]).isRequired,
    usernameRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]).isRequired,
  }).isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  moveToFollowers: PropTypes.func.isRequired,
  moveToFollowings: PropTypes.func.isRequired,
  revertUserBioFunc: PropTypes.func.isRequired,
  setBioAbleFunc: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.string,
    avatarUrl: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    likedTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        userId: PropTypes.string,
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
        id: PropTypes.string,
        userId: PropTypes.string,
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

const ContentHeaderContainer = styled.div`
  min-width: 300px;
`;

const ContentHeaderCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  padding: 0 25px;
  box-sizing: border-box;
`;

const RelationshipsCover = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  > span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  > span:last-of-type {
    margin-left: 35px;
  }
`;
