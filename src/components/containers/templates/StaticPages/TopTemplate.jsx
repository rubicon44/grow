import { TopMessage } from "../../organisms/staticPages/TopMessage";
import { MainWithHeaderForAuthContainer } from "../MainWithHeaderForAuthContainer";

export const TopTemplate = () => (
  <MainWithHeaderForAuthContainer top="top">
    <TopMessage />
    {/* TODO: 使用方法のデモ動画(スクリーンキャスト)を掲載。 */}
  </MainWithHeaderForAuthContainer>
);
