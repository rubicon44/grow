import PropTypes from "prop-types";
import styled from "styled-components";

// todo: ボタンスタイル/デザインを統一し、拡張しやすくする。
export const Button = ({ children, className, onClick }) => (
  <BaseButton className={className} onClick={onClick}>
    {children}
  </BaseButton>
);

Button.defaultProps = {
  className: "",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
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
