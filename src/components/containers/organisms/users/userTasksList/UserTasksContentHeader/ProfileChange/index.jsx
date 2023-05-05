import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ProfileChangeLink } from './ProfileChangeLink';
import { ProfileChangeForm } from './ProfileChangeForm';

// todo: プロフィール編集の際の「コンテンツが何度もレンダリングされる現象」を解決する(おそらくif statementの問題。)。
export const ProfileChange = (props) => {
  const { currentUserId } = props;
  const { bioAble } = props;
  const { id, nickname, username, bio } = props.userData;
  const { setBioAbleFunc } = props;

  if (bioAble === true) {
    return (
      <Profile>
        <div>
          {String(currentUserId) === String(id) && (<ProfileChangeLink setBioAbleFunc={setBioAbleFunc} />)}
        </div>
        <ProfileContent>
          <UserNickName>{nickname}</UserNickName>
          <UserNickName>@{username}</UserNickName>
          <Bio>{bio}</Bio>
        </ProfileContent>
      </Profile>
    );
  };
  return ( String(currentUserId) === String(id) && (<ProfileChangeForm {...props} />) );
};

ProfileChange.propTypes = {
  bioAble: PropTypes.bool.isRequired,
  currentUserId: PropTypes.string.isRequired,
  editing: PropTypes.bool,
  error: PropTypes.bool,
  handleTextSubmit: PropTypes.func.isRequired,
  inputRefs: PropTypes.shape({
    bioRef: PropTypes.object.isRequired,
    nicknameRef: PropTypes.object.isRequired,
    usernameRef: PropTypes.object.isRequired,
  }).isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  revertUserBioFunc: PropTypes.func.isRequired,
  setBioAbleFunc: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    bio: PropTypes.string,
    email: PropTypes.string,
    likedTasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      content: PropTypes.string,
      endDate: PropTypes.string,
      startDate: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
    })),
    nickname: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      content: PropTypes.string,
      endDate: PropTypes.string,
      startDate: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string,
    })),
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