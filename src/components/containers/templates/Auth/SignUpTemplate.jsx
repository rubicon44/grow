import { MainWithHeader } from 'components/containers/templates/MainWithHeader';
import { SignUpFormContainer } from 'components/containers/organisms/Auth/SignUpForm/SignUpFormContainer';

export const SignUpTemplate = () => {
  return (
    <MainWithHeader>
      <SignUpFormContainer />
    </MainWithHeader>
  );
};