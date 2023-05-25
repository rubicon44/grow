import { Link } from "react-router-dom";
import styled from "styled-components";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export const LinkToTaskCreate = () => (
  <LinkToTaskCreateStyle to="/tasks/create">
    <AddRoundedIcon style={{ fontSize: "2.1rem" }} />
  </LinkToTaskCreateStyle>
);

const LinkToTaskCreateStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  font-weight: bold;
  color: #fff;
  background-color: rgb(29, 155, 240);
  z-index: 30;
  box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 8px,
    rgba(101, 119, 134, 0.25) 0px 1px 3px 1px;
`;
