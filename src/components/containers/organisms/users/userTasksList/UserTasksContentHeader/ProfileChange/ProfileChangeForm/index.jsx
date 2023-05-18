import PropTypes from "prop-types";
import styled from "styled-components";
import { FormButton } from "../../../../../../../presentational/atoms/Button/FormButton";
import { FormInput } from "../../../../../../../presentational/atoms/Input/FormInput";
import { FormSubmitButton } from "../../../../../../../presentational/atoms/Button/FormSubmitButton";
import { FormTextArea } from "../../../../../../../presentational/atoms/TextArea/FormTextArea";

export const ProfileChangeForm = ({ handleTextSubmit, inputRefs, isButtonDisabled, revertUserBioFunc, userData }) => {
  const { nickname, username, bio } = userData;
  const { bioRef, nicknameRef, usernameRef } = inputRefs;

  return (
    <FormCover>
      <form onSubmit={handleTextSubmit}>
        <FormInput
          defaultValue={nickname}
          inputRef={nicknameRef}
          htmlFor="nickname"
          type="text"
          name="title"
          placeholder="Nickname"
        >
          ニックネーム:
        </FormInput>
        <FormInput
          defaultValue={username}
          inputRef={usernameRef}
          htmlFor="username"
          type="text"
          name="username"
          placeholder="Username"
        >
          ユーザーネーム:
        </FormInput>
        <FormTextArea
          defaultValue={bio}
          textAreaRef={bioRef}
          htmlFor="bio"
          name="bio"
          placeholder="Bio"
        >
          プロフィール:
        </FormTextArea>
        <FormButtonCover>
          <FormButton handleClick={revertUserBioFunc}>閉じる</FormButton>
          <FormSubmitButton isButtonDisabled={isButtonDisabled}>
            保存
          </FormSubmitButton>
        </FormButtonCover>
      </form>
    </FormCover>
  );
};

ProfileChangeForm.propTypes = {
  handleTextSubmit: PropTypes.func.isRequired,
  inputRefs: PropTypes.shape({
    bioRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    nicknameRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    usernameRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
  }).isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  revertUserBioFunc: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    bio: PropTypes.string,
    email: PropTypes.string,
    likedTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        content: PropTypes.string,
        endDate: PropTypes.string,
        startDate: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    nickname: PropTypes.string,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        content: PropTypes.string,
        endDate: PropTypes.string,
        startDate: PropTypes.string,
        status: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    username: PropTypes.string,
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
