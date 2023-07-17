import { MainWithHeaderContainer } from "../MainWithHeaderContainer";
import { SearchListContainer } from "../../organisms/searches/SearchListContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const SearchTemplate = () => (
  <MainWithHeaderContainer>
    <TitleWithBackArrowHeader title="検索一覧" />
    <SearchListContainer />
  </MainWithHeaderContainer>
);
