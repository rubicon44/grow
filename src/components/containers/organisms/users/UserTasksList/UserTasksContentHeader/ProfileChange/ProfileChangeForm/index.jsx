import PropTypes from "prop-types";
import styled from "styled-components";
import { FormButton } from "../../../../../../../presentational/atoms/Button/FormButton";
import { FormInput } from "../../../../../../../presentational/atoms/Input/FormInput";
import { FormSubmitButton } from "../../../../../../../presentational/atoms/Button/FormSubmitButton";
import { FormTextArea } from "../../../../../../../presentational/atoms/TextArea/FormTextArea";

export const ProfileChangeForm = ({
  handleFileChange,
  handleTextSubmit,
  inputRefs,
  isButtonDisabled,
  revertUserBioFunc,
  userData,
}) => {
  const { nickname, username, bio } = userData;
  const { bioRef, nicknameRef, usernameRef } = inputRefs;

  return (
    <FormCover>
      <FormStyle onSubmit={handleTextSubmit}>
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
        <FormInput
          htmlFor="avatar-url"
          type="file"
          name="avatarUrl"
          placeholder="AvatarUrl"
          onChangeFunc={handleFileChange}
        >
          プロフィール画像:
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
      </FormStyle>
    </FormCover>
  );
};

ProfileChangeForm.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
  handleTextSubmit: PropTypes.func.isRequired,
  inputRefs: PropTypes.shape({
    bioRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    nicknameRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    usernameRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
  }).isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  revertUserBioFunc: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.string,
    avatarUrl: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    likedTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        userId: PropTypes.string,
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
        id: PropTypes.string,
        userId: PropTypes.string,
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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

const FormStyle = styled.form`
  min-width: 260px;
  max-width: 360px;
  text-align: left;
  > label,
  select {
    display: block;
    margin-bottom: 14px;
  }
`;

const FormButtonCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px 0;
  > * + * {
    margin-left: 10px;
  }
`;
