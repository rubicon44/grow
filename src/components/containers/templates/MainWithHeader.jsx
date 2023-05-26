import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../assets/styles/variable";
import { AuthContext } from "../../../auth/AuthProvider";
import { Main } from "./main";
import { ButtonToTaskCreate } from "../organisms/common/ButtonToTaskCreate";
import { HeaderContainer } from "../organisms/common/HeaderContainer";

// todo: Containerレイヤーを作成
export const MainWithHeader = ({ children }) => {
  const { currentUserAuth } = useContext(AuthContext);
  return (
    <>
      <HeaderContainer currentUserAuth={currentUserAuth} />
      <Main>
        {children}
        {currentUserAuth && (
          <Link to="/tasks/create">
            <ButtonToTaskCreateCover>
              <ButtonToTaskCreate />
            </ButtonToTaskCreateCover>
          </Link>
        )}
      </Main>
    </>
  );
};

MainWithHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

const ButtonToTaskCreateCover = styled.div`
  position: fixed;
  bottom: 10%;
  right: 7%;
  ${mediaquery.desk`
    display: none;
  `}
`;
