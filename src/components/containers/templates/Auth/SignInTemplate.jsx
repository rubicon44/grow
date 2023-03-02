import { MainWithHeader } from '../MainWithHeader';
import { SignInFormContainer } from '../../organisms/Auth/SignInFormContainer';

export const SignInTemplate = () => {
  return (
    <MainWithHeader>
      <SignInFormContainer />
    </MainWithHeader>
  );
};