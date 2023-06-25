import { TopImage } from "../../organisms/staticPages/TopImage";
import { TopMessage } from "../../organisms/staticPages/TopMessage";
import { MainWithHeaderForAuthContainer } from "../MainWithHeaderForAuthContainer";

export const TopTemplate = () => (
  <MainWithHeaderForAuthContainer top="top">
    <TopMessage />
    <TopImage />
  </MainWithHeaderForAuthContainer>
);
