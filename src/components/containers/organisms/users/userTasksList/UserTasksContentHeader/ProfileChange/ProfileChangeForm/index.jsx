import styled from 'styled-components';

export const ProfileChangeForm = (props) => {
  const { isButtonDisabled } = props;
  const { handleTextSubmit } = props;
  const { userData } = props;
  const { userNickName, userName, userBio } = userData;
  const { revertUserBioFunc, setUserBioFunc, setUserNameFunc, setUserNickNameFunc } = props;

  // todo: [未着手]コンポーネントの再利用
  return (
    <FormCover>
      <form onSubmit={handleTextSubmit}>
        <FormTextAreaCover>
          <label htmlFor="nickname">ニックネーム
            <input
              name="nickname"
              onChange={setUserNickNameFunc}
              placeholder="nickname"
              cols="80"
              rows="3"
              defaultValue={userNickName}
            />
          </label>
          <label htmlFor="username">ユーザーネーム
            <input
              name="username"
              onChange={setUserNameFunc}
              placeholder="username"
              cols="80"
              rows="3"
              defaultValue={userName}
            />
          </label>
          <label htmlFor="bio">プロフィール
            <textarea
              name="bio"
              onChange={setUserBioFunc}
              placeholder="bio"
              cols="80"
              rows="3"
              defaultValue={userBio}
            />
          </label>
        </FormTextAreaCover>
        <FormButtonCover>
          <button type="button" onClick={revertUserBioFunc}>閉じる</button>
          {/* todo: 保存に合わせて、プロフィールの「自身が作成したタスク」「自身がいいねしたタスク」のニックネームを変更したい(現状、reloadすると変更される)。 */}
          <button type="submit" disabled={isButtonDisabled}>保存</button>
        </FormButtonCover>
      </form>
    </FormCover>
  );
};

const FormCover = styled.div`
  text-align: left;
`;

const FormTextAreaCover = styled.div`
  margin-bottom: 10px;
  > label {
    display: block;
    margin-bottom: 10px;
    > textarea {
      min-height: 200px;
    }
  }
`;

const FormButtonCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px 0;
`;