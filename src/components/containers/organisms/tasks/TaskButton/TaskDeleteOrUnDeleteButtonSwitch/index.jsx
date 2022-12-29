import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTask } from 'infra/api';

// todo: Task以外の「削除しますか」ボタンにも応用可能(as molecules.)
export const TaskDeleteOrUnDeleteButtonSwitch = ({ deleteCheckAble, setLoad, setDeleteCheckAble, taskId, taskCreatedUserName }) => {
  const unDeleteCheckFunc = () => {
    setLoad(false);
    setDeleteCheckAble(false);
  };

  const navigate = useNavigate();
  const deleteTaskFunc = async () => {
    await deleteTask(taskId).then().catch();
    setLoad(false);
    await navigate(`/${taskCreatedUserName}`);
  };

  return (
    deleteCheckAble === true && (
      <BackgroundDisAbledCover>
        <BackgroundDisAbled>
          <div>本当に削除しますか?</div>
          <button type="button" onClick={deleteTaskFunc}>はい</button>
          <button type="button" onClick={unDeleteCheckFunc}>いいえ</button>
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