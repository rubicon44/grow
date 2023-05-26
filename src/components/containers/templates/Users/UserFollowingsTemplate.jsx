import { MainWithHeader } from "../MainWithHeader";
import { UserFollowingsContainer } from "../../organisms/users/UserFollowingsContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserFollowingsTemplate = () => (
  <MainWithHeader>
    <TitleWithBackArrowHeader title="フォロー中" />
    <UserFollowingsContainer />
  </MainWithHeader>
);
