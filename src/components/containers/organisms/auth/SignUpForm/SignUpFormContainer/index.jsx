import { useSignUpForm } from 'hooks/useSignUpForm';
import { SignUpForm } from 'components/containers/organisms/Auth/SignUpForm';

export const SignUpFormContainer = () => {
  const { handleSubmit, load } = useSignUpForm();
  return <SignUpForm handleSubmit={handleSubmit} load={load} />;
};