import PropTypes from "prop-types";
import styled from "styled-components";

export const List = ({ title, content }) => (
  // todo: httpsにおいてXSSできないことを確認する
  // const userInputText1 = `javascript: console.log(document.cookie)`;
  <BaseList>
    <h2>{title}</h2>
    {/* <Link to={userInputText1}>{title}</Link> */}
    <p>{content}</p>
  </BaseList>
);

List.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const BaseList = styled.div`
  min-width: 180px;
  max-width: 180px;
  margin-top: 15px;
  text-align: left;
  word-wrap: break-word;
  > h2 {
    font-weight: bold;
  }
  > p {
    min-height: 100px;
    margin: 10px 0 5px;
    padding: 5px;
    border: 1px solid #bbb;
    white-space: pre-wrap;
  }
`;
