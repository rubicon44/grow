import { useSignInForm } from '../../../../../hooks/useSignInForm';
import { SignInForm } from '../SignInForm';

export const SignInFormContainer = () => {
  const { handleSubmit, isButtonDisabled, signing } = useSignInForm();

  if (signing) return <>サインインしています。</>;
  return <SignInForm handleSubmit={handleSubmit} isButtonDisabled={isButtonDisabled} />;
};