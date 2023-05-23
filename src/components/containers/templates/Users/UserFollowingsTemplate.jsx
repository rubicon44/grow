import { MainWithHeader } from "../MainWithHeader";
import { UserFollowingsListContainer } from "../../organisms/users/UserFollowingsListContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserFollowingsTemplate = () => (
  <MainWithHeader title="フォロー中">
    <TitleWithBackArrowHeader />
    <UserFollowingsListContainer />
  </MainWithHeader>
);
