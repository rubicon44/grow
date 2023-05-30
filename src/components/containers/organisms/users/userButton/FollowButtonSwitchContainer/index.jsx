import PropTypes from "prop-types";
import styled from "styled-components";
import { useFollowAndUnFollow } from "../../../../../../hooks/useFollowAndUnFollow";
import { FollowButtonSwitch } from "../FollowButtonSwitch";

export const FollowButtonSwitchContainer = ({ userIdToFollowOrUnFollow }) => {
  const {
    changeFollowButtonStyle,
    currentUserId,
    error,
    followFunc,
    isFollowing,
    setChangeFollowButtonStyleToFalseFunc,
    setChangeFollowButtonStyleToTrueFunc,
    unFollowFunc,
  } = useFollowAndUnFollow(userIdToFollowOrUnFollow);
  if (error) return <>Error...</>;
  return (
    <FollowButtonSwitch
      changeFollowButtonStyle={changeFollowButtonStyle}
      currentUserId={currentUserId}
      followFunc={followFunc}
      isFollowing={isFollowing}
      setChangeFollowButtonStyleToFalseFunc={
        setChangeFollowButtonStyleToFalseFunc
      }
      setChangeFollowButtonStyleToTrueFunc={
        setChangeFollowButtonStyleToTrueFunc
      }
      unFollowFunc={unFollowFunc}
      userIdToFollowOrUnFollow={userIdToFollowOrUnFollow}
    />
  );
};

FollowButtonSwitchContainer.propTypes = {
  userIdToFollowOrUnFollow: PropTypes.number.isRequired,
};

const WaitingButton = ({ children }) => (
  <FollowChange>
    <FollowChangeLinkCover>
      <FollowChangeLinkNone>
        <span>{children}</span>
      </FollowChangeLinkNone>
    </FollowChangeLinkCover>
  </FollowChange>
);

WaitingButton.propTypes = {
  children: PropTypes.node.isRequired,
};

const FollowChange = styled.div`
  width: 100%;
`;

const FollowChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// todo: Buttonをコンポーネント化
const FollowChangeLinkNone = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 118px;
  border: 1px solid black;
  border-color: rgb(207, 217, 222);
  border-radius: 9999px;
  color: #fff;
  font-weight: bold;
  background-color: rgb(15, 20, 25);
  cursor: pointer;
`;
