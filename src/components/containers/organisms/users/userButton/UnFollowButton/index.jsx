import PropTypes from "prop-types";
import styled from "styled-components";

export const UnFollowButton = ({
  setChangeFollowButtonStyleToFalseFunc,
  unFollowFunc,
}) => (
  <FollowButton
    onMouseLeave={setChangeFollowButtonStyleToFalseFunc}
    onClick={unFollowFunc}
  >
    <span>フォロー解除</span>
  </FollowButton>
);

UnFollowButton.propTypes = {
  setChangeFollowButtonStyleToFalseFunc: PropTypes.func.isRequired,
  unFollowFunc: PropTypes.func.isRequired,
};

const FollowButton = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 118px;
  padding: 0px 5px;
  border: 1px solid black;
  border-color: rgb(253, 201, 206);
  border-radius: 9999px;
  font-weight: bold;
  background-color: rgba(244, 33, 46, 0.1);
  cursor: pointer;
`;
