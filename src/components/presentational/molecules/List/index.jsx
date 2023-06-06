import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaquery } from "../../../../assets/styles/variable";

export const List = ({ title, content }) => (
  // TODO: httpsにおいてXSSできないことを確認する
  // const userInputText1 = `javascript: console.log(document.cookie)`;
  <BaseList>
    <h3>{title}</h3>
    {/* <Link to={userInputText1}>{title}</Link> */}
    <p>{content}</p>
  </BaseList>
);

List.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const BaseList = styled.div`
  margin-top: 15px;
  text-align: left;
  word-wrap: break-word;
  > h3 {
    font-weight: bold;
  }
  > p {
    min-height: 200px;
    margin: 10px 0 5px;
    padding: 10px;
    border: 1px solid #bbb;
    white-space: pre-wrap;
    border-radius: 5px;
    box-sizing: border-box;
    ${mediaquery.desk`
      min-height: 250px;
    `}
  }
`;
