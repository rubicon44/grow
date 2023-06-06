import PropTypes from "prop-types";
import styled from "styled-components";

export const UserTasksButton = ({
  children,
  className,
  color,
  isBold,
  onClick,
  onMouseEnter,
  onMouseLeave,
  size,
}) => (
  <BaseButton
    className={className}
    color={color}
    isBold={isBold}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    size={size}
  >
    {children}
  </BaseButton>
);

UserTasksButton.defaultProps = {
  className: "",
  color: "black",
  isBold: "false",
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  size: "small",
};

UserTasksButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isBold: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  color: PropTypes.oneOf(["white", "black"]),
  size: PropTypes.oneOf(["small", "mid"]),
};

const BaseButton = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: ${(props) => (props.size === "small" ? "118px" : "143px")};
  padding: 0px 5px;
  border: 1px solid black;
  border-color: rgb(207, 217, 222);
  border-radius: 9999px;
  color: ${(props) => {
    switch (props.color) {
      case "white":
        return "#fff";
      case "black":
        return "#000";
      default:
        return "#000";
    }
  }};
  font-weight: ${(props) => (props.isBold === "true" ? "bold" : "normal")};
  background-color: ${(props) => (props.color === "white" ? "#000" : "#fff")};
  cursor: pointer;
}`;
