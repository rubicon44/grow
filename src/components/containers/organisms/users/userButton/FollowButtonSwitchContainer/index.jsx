import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFollowAndUnFollow } from '../../../../../../hooks/useFollowAndUnFollow';
import { FollowButtonSwitch } from '../FollowButtonSwitch';

export const FollowButtonSwitchContainer = ({ userIdToFollowOrUnFollow }) => {
  const { changeFollowButtonStyle, creating, currentUserId, deleting, error, followFunc, loading, isFollowing, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, unFollowFunc } = useFollowAndUnFollow(userIdToFollowOrUnFollow);
  if (error) return <>Error...</>;
  if (creating) return <WaitingButton>Creating...</WaitingButton>;
  if (deleting) return <WaitingButton>Deleting...</WaitingButton>;
  if (loading) return <WaitingButton>Loading...</WaitingButton>;
  return (
    <FollowButtonSwitch
      changeFollowButtonStyle={changeFollowButtonStyle}
      currentUserId={currentUserId}
      followFunc={followFunc}
      isFollowing={isFollowing}
      setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
      setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc}
      unFollowFunc={unFollowFunc}
      userIdToFollowOrUnFollow={userIdToFollowOrUnFollow}
    />
  );
};

const WaitingButton = ({ children }) => {
  return (
    <FollowChange>
      <FollowChangeLinkCover>
        <FollowChangeLinkNone>
          <span>{children}</span>
        </FollowChangeLinkNone>
      </FollowChangeLinkCover>
    </FollowChange>
  );
};

FollowButtonSwitchContainer.propTypes = {
  userIdToFollowOrUnFollow: PropTypes.string.isRequired,
};

const FollowChange = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const FollowChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FollowChangeLinkNone = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 168px;
  border: 1px solid black;
  border-color: rgb(207, 217, 222);
  border-radius: 9999px;
  color: #fff;
  font-weight: bold;
  background-color: rgb(15, 20, 25);
  cursor: pointer;
`;