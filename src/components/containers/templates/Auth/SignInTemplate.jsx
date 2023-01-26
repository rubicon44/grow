import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { SignInFormContainer } from 'components/containers/organisms/Auth/SignInForm/SignInFormContainer';

export const SignInTemplate = () => {
  return (
    <MainWithHeader>
      <SignInFormContainer />
    </MainWithHeader>
  );
};