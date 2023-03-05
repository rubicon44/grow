import styled from 'styled-components';
import { FormButton } from '../../../../../../../presentational/atoms/button/formButton';
import { FormInput } from '../../../../../../../presentational/atoms/input/formInput';
import { FormSubmitButton } from '../../../../../../../presentational/atoms/button/formSubmitButton';
import { FormTextArea } from '../../../../../../../presentational/atoms/textArea/formTextArea';

export const ProfileChangeForm = (props) => {
  const { userNickName, userName, userBio } = props.userData;
  const { inputRefs } = props;
  const { bioRef, nicknameRef, usernameRef } = inputRefs;
  const { handleTextSubmit, isButtonDisabled, revertUserBioFunc } = props;

  return (
    <FormCover>
      <form onSubmit={handleTextSubmit}>
        <FormInput
          defaultValue={userNickName}
          inputRef={nicknameRef}
          htmlFor="nickname"
          type="text"
          name="title"
          placeholder="Nickname"
        >
          ニックネーム:
        </FormInput>
        <FormInput
          defaultValue={userName}
          inputRef={usernameRef}
          htmlFor="username"
          type="text"
          name="username"
          placeholder="Username"
        >
          ユーザーネーム:
        </FormInput>
        <FormTextArea
          defaultValue={userBio}
          textAreaRef={bioRef}
          htmlFor="bio"
          name="bio"
          placeholder="Bio"
        >
          プロフィール:
        </FormTextArea>
        <FormButtonCover>
          <FormButton handleClick={revertUserBioFunc}>閉じる</FormButton>
          <FormSubmitButton isButtonDisabled={isButtonDisabled}>保存</FormSubmitButton>
        </FormButtonCover>
      </form>
    </FormCover>
  );
};

const FormCover = styled.div`
  text-align: left;
`;

const FormButtonCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px 0;
`;