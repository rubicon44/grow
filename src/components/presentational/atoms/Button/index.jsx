import styled from 'styled-components';

export const Button = ({ children, className, onClick }) => {
  return <BaseButton className={className} onClick={onClick} >{children}</BaseButton>;
};

const BaseButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;