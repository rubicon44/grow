import PropTypes from "prop-types";
import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { mediaquery } from "../../../../../../../assets/styles/variable";
import { ProfileChangeLink } from "./ProfileChangeLink";
import { ProfileChangeForm } from "./ProfileChangeForm";
import { FollowButtonSwitchContainer } from "../../../UserButton/FollowButtonSwitchContainer";
import { BaseLink } from "../../../../../../presentational/atoms/Link/BaseLink";

export const ProfileChange = ({
  bioAble,
  currentUserId,
  handleFileChange,
  handleTextSubmit,
  inputRefs,
  isButtonDisabled,
  revertUserBioFunc,
  setBioAbleFunc,
  userData,
}) => {
  const { id, nickname, username, bio, avatarUrl } = userData;

  // TODO: 「フォローされています」を表示。
  if (bioAble) {
    return (
      <Profile>
        <ProfileHeader>
          {/* TODO: Create CreatedUserForProfile component. */}
          <CreatedUserCover>
            <BaseLink url={`/${username}`}>
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt="User Avatar" />
              ) : (
                <DefaultAvatar>
                  <PersonOutlineOutlinedIcon />
                </DefaultAvatar>
              )}
            </BaseLink>
          </CreatedUserCover>
          <ProfileChangeLinkCover>
            {String(currentUserId) === String(id) ? (
              <ProfileChangeLink setBioAbleFunc={setBioAbleFunc} />
            ) : (
              <FollowButtonSwitchContainer
                userIdToFollowOrUnFollow={userData.id}
              />
            )}
          </ProfileChangeLinkCover>
        </ProfileHeader>
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
        handleFileChange={handleFileChange}
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
  handleFileChange: PropTypes.func.isRequired,
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

const AvatarImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  font-size: 12px;
`;

const Bio = styled.div`
  white-space: pre-wrap;
`;

const CreatedUserCover = styled.span`
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  ${mediaquery.desk`
    margin-right: 10px;
  `}
`;

const DefaultAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  font-size: 12px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

const Profile = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ProfileContent = styled.div`
  text-align: left;
`;

const ProfileChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const ProfileHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const UserNickName = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;
