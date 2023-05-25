import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { mediaquery } from "../../../assets/styles/variable";
import { AuthContext } from "../../../auth/AuthProvider";
import { HeaderContainer } from "../organisms/common/HeaderContainer";
import { Main } from "./main";

// todo: currentUserAuthの定義場所を検討。
export const MainWithHeader = ({ children }) => {
  const { currentUserAuth } = useContext(AuthContext);
  return (
    <>
      <HeaderContainer currentUserAuth={currentUserAuth} />
      {/* todo: Main内にTitleWithBackArrowを作成 */}
      <Main>
        {children}
        {currentUserAuth && (
          <LinkCover>
            <LinkToTaskCreate to="/tasks/create">
              <AddRoundedIcon style={{ fontSize: "2.1rem" }} />
            </LinkToTaskCreate>
          </LinkCover>
        )}
      </Main>
    </>
  );
};

MainWithHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

const LinkCover = styled.div`
  position: fixed;
  bottom: 10%;
  right: 7%;
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
  ${mediaquery.desk`
    display: none;
  `}
`;

const LinkToTaskCreate = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
