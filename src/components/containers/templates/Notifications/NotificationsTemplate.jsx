import { MainWithHeaderContainer } from "../MainWithHeaderContainer";
import { NotificationsListContainer } from "../../organisms/notifications/NotificationsListContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const NotificationsTemplate = () => (
  <MainWithHeaderContainer>
    <TitleWithBackArrowHeader title="通知一覧" />
    <NotificationsListContainer />
  </MainWithHeaderContainer>
);
