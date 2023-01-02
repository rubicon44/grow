import styled from 'styled-components';
import { TaskDeleteButton } from 'components/containers/organisms/Tasks/TaskButton/TaskDeleteButton';
import { TaskUnDeleteButton } from 'components/containers/organisms/Tasks/TaskButton/TaskUnDeleteButton';

export const TaskDeleteOrUnDeleteButtonSwitch = ({ deleteCheckAble, deleteTaskFunc, unDeleteCheckFunc }) => {
  return (
    deleteCheckAble === true && (
      <BackgroundDisAbledCover>
        <BackgroundDisAbled>
          <div>本当に削除しますか?</div>
          <TaskDeleteButton deleteTaskFunc={deleteTaskFunc} />
          <TaskUnDeleteButton unDeleteCheckFunc={unDeleteCheckFunc} />
        </BackgroundDisAbled>
      </BackgroundDisAbledCover>
    )
  );
};

const BackgroundDisAbledCover = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #ddd;
`;

const BackgroundDisAbled = styled.div`
  margin: 30px;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
`;