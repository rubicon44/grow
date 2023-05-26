import { MainWithHeader } from "../MainWithHeader";
import { UserFollowersContainer } from "../../organisms/users/UserFollowersContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserFollowersTemplate = () => (
  <MainWithHeader>
    <TitleWithBackArrowHeader title="フォロワー" />
    <UserFollowersContainer />
  </MainWithHeader>
);
