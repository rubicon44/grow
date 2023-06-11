import PropTypes from "prop-types";
import styled from "styled-components";
import { TaskDeleteButton } from "../TaskDeleteButton";
import { TaskUnDeleteButton } from "../TaskUnDeleteButton";

export const TaskDeleteOrUnDeleteButtonSwitch = ({
  deleteCheckAble,
  deleteTaskFunc,
  unDeleteCheckFunc,
}) =>
  deleteCheckAble && (
    <BackgroundDisAbledCover>
      <BackgroundDisAbled>
        <ButtonGroupText>本当に削除しますか？</ButtonGroupText>
        <ButtonGroup>
          <TaskDeleteButton deleteTaskFunc={deleteTaskFunc} />
          <TaskUnDeleteButton unDeleteCheckFunc={unDeleteCheckFunc} />
        </ButtonGroup>
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

const ButtonGroupText = styled.p`
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
