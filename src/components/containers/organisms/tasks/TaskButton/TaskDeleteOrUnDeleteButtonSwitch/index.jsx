import PropTypes from "prop-types";
import styled from "styled-components";
import { TaskDeleteButton } from "../TaskDeleteButton";
import { TaskUnDeleteButton } from "../TaskUnDeleteButton";

export const TaskDeleteOrUnDeleteButtonSwitch = ({
  deleteCheckAble,
  deleteTaskFunc,
  unDeleteCheckFunc,
}) =>
  deleteCheckAble === true && (
    <BackgroundDisAbledCover>
      <BackgroundDisAbled>
        <div>本当に削除しますか?</div>
        <TaskDeleteButton deleteTaskFunc={deleteTaskFunc} />
        <TaskUnDeleteButton unDeleteCheckFunc={unDeleteCheckFunc} />
      </BackgroundDisAbled>
    </BackgroundDisAbledCover>
  );

TaskDeleteOrUnDeleteButtonSwitch.propTypes = {
  deleteCheckAble: PropTypes.bool.isRequired,
  deleteTaskFunc: PropTypes.func.isRequired,
  unDeleteCheckFunc: PropTypes.func.isRequired,
};

const BackgroundDisAbledCover = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52%;
  text-align: center;
  background: #ddd;
`;

const BackgroundDisAbled = styled.div`
  margin: 30px;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
`;
