import PropTypes from "prop-types";
import styled from "styled-components";

export const FollowButton = ({ followFunc }) => (
  <FollowChange>
    <FollowChangeLinkCover>
      <FollowChangeLinkNone onClick={followFunc}>
        <span>フォロー</span>
      </FollowChangeLinkNone>
    </FollowChangeLinkCover>
  </FollowChange>
);

FollowButton.propTypes = {
  followFunc: PropTypes.func.isRequired,
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
