import PropTypes from "prop-types";
import { HeaderContainer } from "../organisms/common/HeaderContainer";
import { Main } from "./main";

export const MainWithHeader = ({ children, title }) => (
  <>
    {/* todo: spの場合はHeader内を画面左側に、pcの場合はHeaderを上部に。 */}
    <HeaderContainer title={title} />
    <Main>{children}</Main>
  </>
);

MainWithHeader.defaultProps = {
  title: null,
};

MainWithHeader.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
