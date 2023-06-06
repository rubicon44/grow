import PropTypes from "prop-types";
import styled from "styled-components";
import { UserTasksButton } from "../../ui/UserTasksButton";

export const FollowButton = ({ followFunc }) => (
  <FollowChange>
    <FollowChangeLinkCover>
      <UserTasksButton
        onClick={followFunc}
        color="white"
        isBold="true"
        size="small"
      >
        <span>フォロー</span>
      </UserTasksButton>
    </FollowChangeLinkCover>
  </FollowChange>
);

FollowButton.propTypes = {
  followFunc: PropTypes.func.isRequired,
};

const FollowChange = styled.div`
  width: 100%;
`;

const FollowChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;
