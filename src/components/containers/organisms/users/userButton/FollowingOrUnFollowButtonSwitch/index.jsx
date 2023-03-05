import styled from 'styled-components';
import { FollowingButton } from '../followingButton';
import { UnFollowButton} from '../unFollowButton';

export const FollowingOrUnFollowButtonSwitch = ({ changeFollowButtonStyle, setChangeFollowButtonStyleToFalseFunc, setChangeFollowButtonStyleToTrueFunc, unFollowFunc }) => {
  return (
    <FollowChange>
      <FollowChangeLinkCover>
        {changeFollowButtonStyle ? (
          <UnFollowButton
            setChangeFollowButtonStyleToFalseFunc={setChangeFollowButtonStyleToFalseFunc}
            unFollowFunc={unFollowFunc}
          />
        ) : (
          <FollowingButton setChangeFollowButtonStyleToTrueFunc={setChangeFollowButtonStyleToTrueFunc} />
        )}
      </FollowChangeLinkCover>
    </FollowChange>
  );
};

const FollowChange = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const FollowChangeLinkCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;