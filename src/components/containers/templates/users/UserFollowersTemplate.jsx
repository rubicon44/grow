import { MainWithHeaderContainer } from "../MainWithHeaderContainer";
import { UserFollowersContainer } from "../../organisms/users/UserFollowersContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserFollowersTemplate = () => (
  <MainWithHeaderContainer>
    <TitleWithBackArrowHeader title="フォロワー" />
    <UserFollowersContainer />
  </MainWithHeaderContainer>
);
