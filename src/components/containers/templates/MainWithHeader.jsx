import { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../assets/styles/variable";
import { LinkToTaskCreate } from "../organisms/common/LinkToTaskCreate";
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
          <LinkToTaskCreateCover>
            <LinkToTaskCreate />
          </LinkToTaskCreateCover>
        )}
      </Main>
    </>
  );
};

MainWithHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

const LinkToTaskCreateCover = styled.div`
  position: fixed;
  bottom: 10%;
  right: 7%;
  ${mediaquery.desk`
    display: none;
  `}
`;
