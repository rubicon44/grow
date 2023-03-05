import { MainWithHeader } from '../mainWithHeader';
import { SignInFormContainer } from '../../organisms/auth/signInFormContainer';

export const SignInTemplate = () => {
  return (
    <MainWithHeader>
      <SignInFormContainer />
    </MainWithHeader>
  );
};