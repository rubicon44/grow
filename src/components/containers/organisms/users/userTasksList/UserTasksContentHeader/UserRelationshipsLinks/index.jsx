import PropTypes from "prop-types";
import styled from "styled-components";

export const UserRelationshipsLinks = ({
  moveToFollowers,
  moveToFollowings,
}) => (
  <>
    <InteractiveSpan onClick={moveToFollowings}>フォロー中</InteractiveSpan>
    <InteractiveSpan onClick={moveToFollowers}>フォロワー</InteractiveSpan>
  </>
);

UserRelationshipsLinks.propTypes = {
  moveToFollowers: PropTypes.func.isRequired,
  moveToFollowings: PropTypes.func.isRequired,
};

const InteractiveSpan = styled.span`
  cursor: pointer;
  user-select: none;
`;
