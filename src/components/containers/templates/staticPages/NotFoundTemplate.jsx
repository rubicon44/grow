// import { MainWithHeaderContainer } from "../MainWithHeaderContainer";
import { MainWithHeaderForAuthContainer } from "../MainWithHeaderForAuthContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const NotFoundTemplate = () => (
  <MainWithHeaderForAuthContainer>
    <TitleWithBackArrowHeader title="NotFound" />
    <p>お探しのページが見つかりません。</p>
  </MainWithHeaderForAuthContainer>
);
