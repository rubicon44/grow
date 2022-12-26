import React, { useState } from 'react';
import styled from 'styled-components';
import { FollowingButton } from 'components/containers/organisms/Users/UserButton/FollowingButton';
import { UnFollowButton} from 'components/containers/organisms/Users/UserButton/UnFollowButton';

export const FollowingOrUnFollowButtonSwitch = ({ currentUserId, followerId, setFollowAble }) => {
  const [changeFollowButtonStyle, setChangeFollowButtonStyle] = useState(false);
  return (
    <FollowChange>
      <FollowChangeLinkCover>
        {changeFollowButtonStyle === false ? (
        <FollowingButton setChangeFollowButtonStyle={setChangeFollowButtonStyle} />
        ) : (
        <UnFollowButton
          currentUserId={currentUserId}
          followerId={followerId}
          setFollowAble={setFollowAble}
          setChangeFollowButtonStyle={setChangeFollowButtonStyle}
        />
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