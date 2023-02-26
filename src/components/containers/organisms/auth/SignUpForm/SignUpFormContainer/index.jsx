import { useSignUpForm } from 'hooks/useSignUpForm';
import { SignUpForm } from 'components/containers/organisms/Auth/SignUpForm';

export const SignUpFormContainer = () => {
  const { handleSubmit, isButtonDisabled, signuping } = useSignUpForm();

  if (signuping) return <>ユーザー情報を登録しています。</>;
  return <SignUpForm handleSubmit={handleSubmit} isButtonDisabled={isButtonDisabled} />;
};