import styled from 'styled-components';
import { deleteRelationships } from 'infra/api';

export const UnFollowButton = ({ currentUserId, followerId, setFollowAble, setChangeFollowButtonStyle }) => {
  const setChangeFollowButtonStyleToFalseFunc = () => {
    setChangeFollowButtonStyle(false);
  };

  const unFollowFunc = () => {
    const relationships = { following_id: currentUserId, follower_id: followerId };
    deleteRelationships(relationships).then().catch();
    setFollowAble(true);
  };

  return (
    <FollowChangeLinkDoneToUnFollow onMouseLeave={setChangeFollowButtonStyleToFalseFunc} onClick={unFollowFunc}>
      <span>フォロー解除</span>
    </FollowChangeLinkDoneToUnFollow>
  );
};

const FollowChangeLinkDoneToUnFollow = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 168px;
  border: 1px solid black;
  border-color: rgb(253, 201, 206);
  border-radius: 9999px;
  font-weight: bold;
  background-color: rgba(244, 33, 46, 0.1);
  cursor: pointer;
`;