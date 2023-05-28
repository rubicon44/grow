import PropTypes from "prop-types";
import styled from "styled-components";

export const FollowingButton = ({ setChangeFollowButtonStyleToTrueFunc }) => (
  // todo: buttonコンポーネントの使用を検討。
  <FollowChangeLinkDone onMouseEnter={setChangeFollowButtonStyleToTrueFunc}>
    <span>フォロー中</span>
  </FollowChangeLinkDone>
);

FollowingButton.propTypes = {
  setChangeFollowButtonStyleToTrueFunc: PropTypes.func.isRequired,
};

// todo: Buttonをコンポーネント化
const FollowChangeLinkDone = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 118px;
  border: 1px solid black;
  border-color: rgb(207, 217, 222);
  border-radius: 9999px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;
