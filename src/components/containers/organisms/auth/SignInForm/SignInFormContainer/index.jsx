import { useSignInForm } from 'hooks/useSignInForm';
import { SignInForm } from 'components/containers/organisms/Auth/SignInForm';

export const SignInFormContainer = () => {
  const { handleSubmit, isButtonDisabled, signing } = useSignInForm();

  if (signing) return <>サインインしています。</>;
  return <SignInForm handleSubmit={handleSubmit} isButtonDisabled={isButtonDisabled} />;
};