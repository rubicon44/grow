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
          id: PropTypes.number,
          user_id: PropTypes.number,
          content: PropTypes.string,
          status: PropTypes.number,
          title: PropTypes.string,
        })
      ),
      username: PropTypes.string,
    }),
    userTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        user_id: PropTypes.number,
        content: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ).isRequired,
    likedTasks: PropTypes.arrayOf(PropTypes.shape({
      task: PropTypes.shape({
        id: PropTypes.number,
        user_id: PropTypes.number,
        content: PropTypes.string,
        end_date: PropTypes.string,
        start_date: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      }),
    })),
    userBio: PropTypes.string,
    userNickName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
};