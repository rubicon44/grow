import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from 'auth/AuthProvider';

export const useSignInForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useContext(AuthContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    const { email, password } = e.target.elements;
    await signin(email.value, password.value);
    setIsButtonDisabled(false);
    const locationPathName = location.pathname.split('/');
    const tasksText = locationPathName[locationPathName.length - 1];
    if(tasksText === "tasks") {
      window.location.reload();
    } else {
      await navigate('/tasks');
    };
  };
  return { handleSubmit, isButtonDisabled };
};