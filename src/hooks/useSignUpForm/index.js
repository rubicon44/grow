import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import { useGetErrorMessage } from "../useGetErrorMessage";
import { useInputSanitization } from "../useInputSanitization";
import { useInputValidation } from "../useInputValidation";

export const useSignUpForm = () => {
  const navigateToTasks = useNavigate();
  const { signup } = useContext(AuthContext);
  const { getErrorMessage } = useGetErrorMessage();
  const { sanitizeInput } = useInputSanitization();
  const { validateInput, validateEmailFormat } = useInputValidation();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [signuping, setSignuping] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignuping(true);
    setIsButtonDisabled(true);

    try {
      const nickname = sanitizeInput(e.target.elements.nickname.value, {
        trim: true,
        ALLOWED_TAGS: [],
      });
      const username = sanitizeInput(e.target.elements.username.value, {
        trim: true,
        ALLOWED_TAGS: [],
      });
      const email = sanitizeInput(e.target.elements.email.value, {
        trim: true,
        ALLOWED_TAGS: [],
      });
      const password = sanitizeInput(e.target.elements.password.value, {
        trim: true,
        ALLOWED_TAGS: [],
      });

      if (
        !validateInput(nickname, "ニックネーム", {
          maxLength: 50,
          nullFalse: false,
        }) ||
        !validateInput(username, "ユーザーネーム", {
          maxLength: 15,
          nullFalse: false,
        }) ||
        !validateInput(email, "メールアドレス", { nullFalse: false }) ||
        !validateInput(password, "パスワード", {
          minLength: 6,
          nullFalse: false,
        }) ||
        !validateEmailFormat(email)
      ) {
        setIsButtonDisabled(false);
        return;
      }

      await signup(nickname, username, email, password);
      await navigateToTasks("/tasks");
    } catch (error) {
      const verbForErrorMessage = `ユーザー`;
      const objectForErrorMessage = `サインアップ`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    } finally {
      setSignuping(false);
      setIsButtonDisabled(false);
    }
  };

  return {
    handleSubmit,
    isButtonDisabled,
    signuping,
  };
};
