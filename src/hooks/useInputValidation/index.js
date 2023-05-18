export const useInputValidation = () => {
  // common
  const validateInput = (
    value,
    inputName,
    { maxLength, minLength = null, nullFalse = true }
  ) => {
    if (!value && !nullFalse) {
      window.alert(`${inputName}を入力してください。`);
      return false;
    }

    if (value.length > maxLength) {
      window.alert(`${inputName}は${maxLength}字以下で入力してください。`);
      return false;
    }

    if (minLength !== null && value.length < minLength) {
      window.alert(`${inputName}は${minLength}字以上で入力してください。`);
      return false;
    }
    return true;
  };

  // auth
  const validateEmailFormat = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      window.alert("有効なメールアドレスを入力してください。");
      return false;
    }
    return true;
  };

  // task
  const validateTask = (startDate, endDate) => {
    if (endDate && startDate && endDate < startDate) {
      window.alert("開始日には、終了日よりも前の日付を設定してください。");
      return false;
    }
    return true;
  };

  return { validateInput, validateEmailFormat, validateTask };
};
