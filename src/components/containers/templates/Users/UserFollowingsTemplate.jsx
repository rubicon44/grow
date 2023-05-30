import { MainWithHeaderContainer } from "../MainWithHeaderContainer";
import { UserFollowingsContainer } from "../../organisms/users/UserFollowingsContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserFollowingsTemplate = () => (
  <MainWithHeaderContainer>
    <TitleWithBackArrowHeader title="フォロー中" />
    <UserFollowingsContainer />
  </MainWithHeaderContainer>
);
