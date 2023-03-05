import { MainWithHeader } from '../MainWithHeader';
import { SignUpFormContainer } from '../../organisms/auth/SignUpFormContainer';

export const SignUpTemplate = () => {
  return (
    <MainWithHeader>
      <SignUpFormContainer />
    </MainWithHeader>
  );
};