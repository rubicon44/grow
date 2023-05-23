import { MainWithHeader } from "../MainWithHeader";
import { UserFollowersListContainer } from "../../organisms/users/UserFollowersListContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserFollowersTemplate = () => (
  <MainWithHeader title="フォロワー">
    <TitleWithBackArrowHeader />
    <UserFollowersListContainer />
  </MainWithHeader>
);
