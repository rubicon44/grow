import PropTypes from 'prop-types';
import { ProfileChange } from '../ProfileChange';

export const ProfileChangeContainer = (props) => {
  const { editing, error, loading } = props;
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  if (editing) return <>Editing...</>;
  return <ProfileChange {...props} />;
};

ProfileChangeContainer.propTypes = {
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
    taskUser: PropTypes.shape({
      bio: PropTypes.string,
      id: PropTypes.number,
      nickname: PropTypes.string,
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.string,
          created_at: PropTypes.string,
          id: PropTypes.number,
          status: PropTypes.number,
          title: PropTypes.string,
          updated_at: PropTypes.string,
          user_id: PropTypes.number,
        })
      ),
      username: PropTypes.string,
    }),
    userTasks: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
        created_at: PropTypes.string,
        id: PropTypes.number,
        status: PropTypes.number,
        title: PropTypes.string,
        updated_at: PropTypes.string,
        user_id: PropTypes.number,
      })
    ).isRequired,
    likedTasksWithUser: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
        created_at: PropTypes.string,
        id: PropTypes.number,
        status: PropTypes.number,
        title: PropTypes.string,
        updated_at: PropTypes.string,
        user_id: PropTypes.number,
      })
    ),
    userBio: PropTypes.string,
    userNickName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
};