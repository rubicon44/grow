import PropTypes from "prop-types";
import { ProfileChange } from "../ProfileChange";

export const ProfileChangeContainer = (props) => {
  const {
    bioAble,
    currentUserId,
    handleTextSubmit,
    inputRefs,
    isButtonDisabled,
    revertUserBioFunc,
    setBioAbleFunc,
    userData,
  } = props;

  return (
    <ProfileChange
      bioAble={bioAble}
      currentUserId={currentUserId}
      handleTextSubmit={handleTextSubmit}
      inputRefs={inputRefs}
      isButtonDisabled={isButtonDisabled}
      revertUserBioFunc={revertUserBioFunc}
      setBioAbleFunc={setBioAbleFunc}
      userData={userData}
    />
  );
};

ProfileChangeContainer.propTypes = {
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
