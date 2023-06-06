import PropTypes from "prop-types";
import styled from "styled-components";
import { UserTasksButton } from "../../../../ui/UserTasksButton";

export const ProfileChangeLink = ({ setBioAbleFunc }) => (
  <BioChangeLinkCover>
    <UserTasksButton
      onClick={setBioAbleFunc}
      color="black"
      size="mid"
      isBold="true"
    >
      <span>プロフィールを編集</span>
    </UserTasksButton>
  </BioChangeLinkCover>
);

ProfileChangeLink.propTypes = {
  setBioAbleFunc: PropTypes.func.isRequired,
};

const BioChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;
