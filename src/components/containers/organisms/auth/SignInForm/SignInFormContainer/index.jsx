import { useSignInForm } from 'hooks/useSignInForm';
import { SignInForm } from 'components/containers/organisms/Auth/SignInForm';

export const SignInFormContainer = () => {
  const { handleSubmit, isButtonDisabled } = useSignInForm();
  return <SignInForm handleSubmit={handleSubmit} isButtonDisabled={isButtonDisabled} />;
};