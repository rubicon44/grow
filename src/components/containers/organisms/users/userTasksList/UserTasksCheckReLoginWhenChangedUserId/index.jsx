import PropTypes from "prop-types";
import styled from "styled-components";

export const UserTasksCheckReLoginWhenChangedUserId = ({
  changeUserNameFunc,
  revertUserBioFunc,
}) => (
  <BackgroundDisAbledCover>
    <BackgroundDisAbled>
      <div>ユーザーIDの変更には際ログインが必要です。変更しますか？</div>
      <button type="button" onClick={changeUserNameFunc}>
        はい
      </button>
      <button type="button" onClick={revertUserBioFunc}>
        いいえ
      </button>
    </BackgroundDisAbled>
  </BackgroundDisAbledCover>
);

UserTasksCheckReLoginWhenChangedUserId.propTypes = {
  changeUserNameFunc: PropTypes.func.isRequired,
  revertUserBioFunc: PropTypes.func.isRequired,
};

const BackgroundDisAbledCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #ddd;
`;

const BackgroundDisAbled = styled.div`
  margin: 30px;
  margin-top: 40%;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
`;
