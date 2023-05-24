import PropTypes from "prop-types";
import { HeaderContainer } from "../organisms/common/HeaderContainer";
import { Main } from "./main";

export const MainWithHeader = ({ children }) => (
  <>
    <HeaderContainer />
    {/* todo: Main内にTitleWithBackArrowを作成 */}
    <Main>{children}</Main>
  </>
);

MainWithHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
