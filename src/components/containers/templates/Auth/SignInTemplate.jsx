import { MainWithHeader } from '../MainWithHeader';
import { SignInFormContainer } from '../../organisms/auth/SignInFormContainer';

export const SignInTemplate = () => {
  return (
    <MainWithHeader>
      <SignInFormContainer />
    </MainWithHeader>
  );
};