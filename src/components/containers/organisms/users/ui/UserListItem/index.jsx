import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { mediaquery } from "../../../../../../assets/styles/variable";
import { FollowButtonForUsersListSwitchContainer } from "../../UserButton/FollowButtonForUsersListSwitchContainer";
import { FollowedTextContainer } from "./FollowedTextContainer";
import { BaseLink } from "../../../../../presentational/atoms/Link/BaseLink";

export const UserListItem = ({
  currentUserId,
  outerElementUsersForSearchRef,
  user,
}) => (
  <UserListItemStyle ref={outerElementUsersForSearchRef}>
    {/* TODO: Create CreatedUser component. */}
    <CreatedUserCover>
      <BaseLink url={`/${user.username}`}>
        {user.avatarUrl ? (
          <AvatarImage src={user.avatarUrl} alt="User Avatar" />
        ) : (
          <DefaultAvatar>
            <PersonOutlineOutlinedIcon />
          </DefaultAvatar>
        )}
      </BaseLink>
    </CreatedUserCover>
    <ListCover>
      <ListHeader>
        <ListHeaderInner>
          <UserNameInList>
            <Link to={`/${user.username}`}>{user.nickname}</Link>
          </UserNameInList>
          <NicknameAndFollowedTextCover>
            <NicknameStyle>@{user.username}</NicknameStyle>
            <FollowedTextContainer userId={user.id} />
          </NicknameAndFollowedTextCover>
        </ListHeaderInner>
        <FollowButtonForUsersListSwitchContainer
          currentUserId={currentUserId}
          userIdToFollowOrUnFollow={user.id}
          username={user.username}
        />
      </ListHeader>
      <p>{user.bio}</p>
    </ListCover>
  </UserListItemStyle>
);

UserListItem.defaultProps = {
  outerElementUsersForSearchRef: null,
};

UserListItem.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  outerElementUsersForSearchRef: PropTypes.objectOf(
    PropTypes.instanceOf(Element)
  ),
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 35px;
  font-size: 12px;
`;

const CreatedUserCover = styled.span`
  width: 40px;
  height: 40px;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  ${mediaquery.desk`
    margin-right: 10px;
  `}
`;

const DefaultAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 35px;
  font-size: 12px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

const ListCover = styled.div`
  position: relative;
  width: 100%;
`;

const ListHeader = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const ListHeaderInner = styled.div`
  width: 100%;
`;

const NicknameAndFollowedTextCover = styled.div`
  width: 100%;
  ${mediaquery.desk`
    display: flex;
  `}
`;

const NicknameStyle = styled.span`
  margin-right: 4px;
  overflow-y: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const UserNameInList = styled.div`
  margin-bottom: 4px;
  font-weight: bold;
  > a:hover {
    border-bottom: 1px solid #000;
  }
`;

const UserListItemStyle = styled.div`
  position: relative;
  display: flex;
  margin-top: 15px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
`;
