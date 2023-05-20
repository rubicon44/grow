import { MainWithHeader } from "../MainWithHeader";
import { NotificationsListContainer } from "../../organisms/notifications/NotificationsListContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const NotificationsTemplate = () => (
  <MainWithHeader>
    <TitleWithBackArrowHeader>通知一覧</TitleWithBackArrowHeader>
    <NotificationsListContainer />
  </MainWithHeader>
);
