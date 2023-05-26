import PropTypes from "prop-types";
import styled from "styled-components";
import { FollowButtonSwitchContainer } from "../../userButton/FollowButtonSwitchContainer";
import { ProfileChangeContainer } from "./ProfileChangeContainer";
import { UserTasksCheckReLoginWhenChangedUserId } from "../UserTasksCheckReLoginWhenChangedUserId";

export const UserTasksContentHeader = (props) => {
  const { currentUserId } = props;
  const {
    bioAble,
    changeUserNameCheckAble,
    changeUserNameFunc,
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
      {changeUserNameCheckAble === true && (
        <UserTasksCheckReLoginWhenChangedUserId
          changeUserNameFunc={changeUserNameFunc}
          revertUserBioFunc={revertUserBioFunc}
        />
      )}
      <ContentHeaderContainer>
        <ContentHeaderCover>
          <FollowButtonSwitchContainer userIdToFollowOrUnFollow={userData.id} />
          <ProfileChangeContainer
            bioAble={bioAble}
            currentUserId={currentUserId}
            handleTextSubmit={handleTextSubmit}
            inputRefs={inputRefs}
            isButtonDisabled={isButtonDisabled}
            revertUserBioFunc={revertUserBioFunc}
            setBioAbleFunc={setBioAbleFunc}
            userData={userData}
          />
          <RelationshipsCover>
            <InteractiveSpan onClick={moveToFollowings}>
              フォロー中
            </InteractiveSpan>
            <InteractiveSpan onClick={moveToFollowers}>
              フォロワー
            </InteractiveSpan>
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

const ContentHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 320px;
  max-width: 480px;
  padding-bottom: 15px;
`;

const ContentHeaderCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  padding: 0 10px;
  box-sizing: border-box;
`;

const InteractiveSpan = styled.span`
  cursor: pointer;
  user-select: none;
`;

const RelationshipsCover = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
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
