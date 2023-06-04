import PropTypes from "prop-types";
import styled from "styled-components";
import { ProfileChangeLink } from "./ProfileChangeLink";
import { ProfileChangeForm } from "./ProfileChangeForm";

export const ProfileChange = ({
  bioAble,
  currentUserId,
  handleTextSubmit,
  inputRefs,
  isButtonDisabled,
  revertUserBioFunc,
  setBioAbleFunc,
  userData,
}) => {
  const { id, nickname, username, bio } = userData;

  // todo: 「フォローされています」を表示。。
  if (bioAble === true) {
    return (
      <Profile>
        {String(currentUserId) === String(id) && (
          <ProfileChangeLink setBioAbleFunc={setBioAbleFunc} />
        )}
        <ProfileContent>
          <UserNickName>{nickname}</UserNickName>
          <UserNickName>@{username}</UserNickName>
          <Bio>{bio}</Bio>
        </ProfileContent>
      </Profile>
    );
  }
  return (
    String(currentUserId) === String(id) && (
      <ProfileChangeForm
        currentUserId={currentUserId}
        handleTextSubmit={handleTextSubmit}
        inputRefs={inputRefs}
        isButtonDisabled={isButtonDisabled}
        revertUserBioFunc={revertUserBioFunc}
        setBioAbleFunc={setBioAbleFunc}
        userData={userData}
      />
    )
  );
};

ProfileChange.propTypes = {
  bioAble: PropTypes.bool.isRequired,
  currentUserId: PropTypes.string.isRequired,
  handleTextSubmit: PropTypes.func.isRequired,
  inputRefs: PropTypes.shape({
    bioRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    nicknameRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    usernameRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
  }).isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
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
