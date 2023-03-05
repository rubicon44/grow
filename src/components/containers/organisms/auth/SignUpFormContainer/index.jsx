import { useSignUpForm } from '../../../../../hooks/useSignUpForm';
import { SignUpForm } from '../signUpForm';

export const SignUpFormContainer = () => {
  const { handleSubmit, isButtonDisabled, signuping } = useSignUpForm();

  if (signuping) return <>ユーザー情報を登録しています。</>;
  return <SignUpForm handleSubmit={handleSubmit} isButtonDisabled={isButtonDisabled} />;
};