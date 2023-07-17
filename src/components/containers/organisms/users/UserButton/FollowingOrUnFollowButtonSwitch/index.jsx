import PropTypes from "prop-types";
import styled from "styled-components";
import { FollowingButton } from "../FollowingButton";
import { UnFollowButton } from "../UnFollowButton";

export const FollowingOrUnFollowButtonSwitch = ({
  changeFollowButtonStyle,
  setChangeFollowButtonStyleToFalseFunc,
  setChangeFollowButtonStyleToTrueFunc,
  unFollowFunc,
}) => (
  <FollowChange>
    <FollowChangeLinkCover>
      {changeFollowButtonStyle ? (
        <UnFollowButton
          setChangeFollowButtonStyleToFalseFunc={
            setChangeFollowButtonStyleToFalseFunc
          }
          unFollowFunc={unFollowFunc}
        />
      ) : (
        <FollowingButton
          setChangeFollowButtonStyleToTrueFunc={
            setChangeFollowButtonStyleToTrueFunc
          }
        />
      )}
    </FollowChangeLinkCover>
  </FollowChange>
);

FollowingOrUnFollowButtonSwitch.propTypes = {
  changeFollowButtonStyle: PropTypes.bool.isRequired,
  setChangeFollowButtonStyleToFalseFunc: PropTypes.func.isRequired,
  setChangeFollowButtonStyleToTrueFunc: PropTypes.func.isRequired,
  unFollowFunc: PropTypes.func.isRequired,
};

const FollowChange = styled.div`
  width: 100%;
`;

const FollowChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;
