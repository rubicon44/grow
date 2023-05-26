import PropTypes from "prop-types";

export const TaskFormSelect = ({ selectRef, defaultValue }) => (
  <select defaultValue={defaultValue} ref={selectRef}>
    <option value="0">未対応</option>
    <option value="1">処理中</option>
    <option value="2">処理済み</option>
    <option value="3">完了</option>
  </select>
);

TaskFormSelect.propTypes = {
  selectRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
  defaultValue: PropTypes.number.isRequired,
};
