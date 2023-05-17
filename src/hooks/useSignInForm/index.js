import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';
import { useGetErrorMessage } from '..//useGetErrorMessage';
import { useInputSanitization } from '../useInputSanitization';
import { useInputValidation } from '../useInputValidation';

export const useSignInForm = () => {
  const navigateToTasks = useNavigate();
  const { signin } = useContext(AuthContext);
  const { getErrorMessage } = useGetErrorMessage();
  const { sanitizeInput } = useInputSanitization();
  const { validateInput, validateEmailFormat } = useInputValidation();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [signing, setSigning] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSigning(true);
    setIsButtonDisabled(true);

    try {
      const email = sanitizeInput(e.target.elements.email.value, { trim: true, ALLOWED_TAGS: [] });
      const password = sanitizeInput(e.target.elements.password.value, { trim: true, ALLOWED_TAGS: [] });

      if (
        !validateInput(email, 'メールアドレス', { nullFalse: false }) ||
        !validateInput(password, 'パスワード', { minLength: 6, nullFalse: false }) ||
        !validateEmailFormat(email)
      ) {
        setIsButtonDisabled(false);
        return;
      }

      await signin(email, password);
      await navigateToTasks('/tasks');
    } catch (error) {
      console.error(`ユーザーのログイン中にエラーが発生しました。: `, error);
      const verbForErrorMessage = `ユーザー`;
      const objectForErrorMessage = `ログイン`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    } finally {
      setSigning(false);
      setIsButtonDisabled(false);
    };
  };

  return {
    handleSubmit,
    isButtonDisabled,
    signing,
  };
};