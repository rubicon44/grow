import { MainWithHeader } from '../mainWithHeader';
import { SignUpFormContainer } from '../../organisms/auth/SignUpFormContainer';

export const SignUpTemplate = () => {
  return (
    <MainWithHeader>
      <SignUpFormContainer />
    </MainWithHeader>
  );
};