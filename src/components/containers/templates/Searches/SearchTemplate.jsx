import { MainWithHeader } from "../MainWithHeader";
import { SearchListContainer } from "../../organisms/Searches/SearchListContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const SearchTemplate = () => (
  <MainWithHeader>
    <TitleWithBackArrowHeader title="検索一覧" />
    <SearchListContainer />
  </MainWithHeader>
);
