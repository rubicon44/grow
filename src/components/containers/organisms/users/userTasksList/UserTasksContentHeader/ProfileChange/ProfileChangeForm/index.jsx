import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormButton } from '../../../../../../../presentational/atoms/Button/FormButton';
import { FormInput } from '../../../../../../../presentational/atoms/Input/FormInput';
import { FormSubmitButton } from '../../../../../../../presentational/atoms/Button/FormSubmitButton';
import { FormTextArea } from '../../../../../../../presentational/atoms/TextArea/FormTextArea';

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

ProfileChangeForm.propTypes = {
  handleTextSubmit: PropTypes.func.isRequired,
  inputRefs: PropTypes.shape({
    bioRef: PropTypes.object.isRequired,
    nicknameRef: PropTypes.object.isRequired,
    usernameRef: PropTypes.object.isRequired,
  }).isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  revertUserBioFunc: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    taskUser: PropTypes.shape({
      bio: PropTypes.string,
      id: PropTypes.number,
      nickname: PropTypes.string,
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          user_id: PropTypes.number,
          content: PropTypes.string,
          status: PropTypes.number,
          title: PropTypes.string,
        })
      ),
      username: PropTypes.string,
    }),
    userTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        user_id: PropTypes.number,
        content: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ).isRequired,
    likedTasksWithUser: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        user_id: PropTypes.number,
        content: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    userBio: PropTypes.string,
    userNickName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
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