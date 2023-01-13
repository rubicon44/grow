import { FollowButton } from 'components/containers/organisms/Users/UserButton/FollowButton';
import { FollowingOrUnFollowButtonSwitch } from 'components/containers/organisms/Users/UserButton/FollowingOrUnFollowButtonSwitch';
import { FollowOrFollowingOrUnFollowButtonSwitch } from 'components/containers/organisms/Users/UserButton/FollowButtonForUsersListSwitch/FollowOrFollowingOrUnFollowButtonSwitch';

export const FollowButtonForUsersListSwitch = (props) => {
  const { currentUserName, username } = props;
  const { currentUserId, followerId } = props;
  const { changeFollowButtonStyle, followFunc, isFollowing, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, unFollowFunc } = props;

  // ログイン中ユーザーと閲覧対象のユーザーが一緒の時
  if(String(currentUserName) === String(username)) {
    return (
      isFollowing ? (
        <FollowingOrUnFollowButtonSwitch
          changeFollowButtonStyle={changeFollowButtonStyle}
          setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
          setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc}
          unFollowFunc={unFollowFunc}
        />
      ) : (
        <FollowButton followFunc={followFunc} />
      )
    );
  } else {
    // ログイン中ユーザーと閲覧対象のユーザーが違う時
    if(String(currentUserId) === String(followerId)) {
      return (null);
    };

    return (
      isFollowing ? (
        <FollowOrFollowingOrUnFollowButtonSwitch
          changeFollowButtonStyle={changeFollowButtonStyle}
          followFunc={followFunc}
          isFollowing={isFollowing}
          setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
          setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc}
          unFollowFunc={unFollowFunc}
        />
      ) : (
        <FollowButton followFunc={followFunc} />
      )
    );
  };
};