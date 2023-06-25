import styled from "styled-components";
import ServiceTopImage from "../../../../../assets/images/top-image1.png";

export const TopImage = () => (
  <TopImageCover>
    <img src={ServiceTopImage} alt="タスク管理サービスの紹介画像" />
  </TopImageCover>
);

const TopImageCover = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  > img {
    width: 100%;
    max-width: 400px;
    margin-top: 20px;
    border: 1px solid #ddd;
  }
`;
