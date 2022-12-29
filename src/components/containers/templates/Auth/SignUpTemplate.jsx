import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { SignUpForm } from 'components/containers/organisms/Auth/SignUpForm';

export const SignUpTemplate = () => {
  return (
    <MainWithHeader>
      <SignUpForm />
    </MainWithHeader>
  );
}