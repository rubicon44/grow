import PropTypes from "prop-types";
import styled from "styled-components";

export const TaskFormSelect = ({ selectRef, defaultValue }) => (
  <TaskFormSelectCover>
    <select defaultValue={defaultValue} ref={selectRef}>
      <option value="0">未対応</option>
      <option value="1">処理中</option>
      <option value="2">処理済み</option>
      <option value="3">完了</option>
    </select>
  </TaskFormSelectCover>
);

TaskFormSelect.propTypes = {
  selectRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
  defaultValue: PropTypes.number.isRequired,
};

const TaskFormSelectCover = styled.div`
  margin-bottom: 10px;
  > label {
    display: block;
  }
`;
