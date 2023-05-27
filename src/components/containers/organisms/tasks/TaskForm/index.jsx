import PropTypes from "prop-types";
import styled from "styled-components";
import { FormInput } from "../../../../presentational/atoms/Input/FormInput";
import { FormSubmitButton } from "../../../../presentational/atoms/Button/FormSubmitButton";
import { FormTextArea } from "../../../../presentational/atoms/TextArea/FormTextArea";
import { TaskFormSelect } from "./ui/TaskFormSelect";

export const TaskForm = ({
  handleTextSubmit,
  inputRefs,
  isButtonDisabled,
  taskData,
}) => {
  const { title, content, status, startDate, endDate } = taskData.task;
  const { titleRef, contentRef, statusRef, startDateRef, endDateRef } =
    inputRefs;
  return (
    <TaskFormCover>
      <TaskFormStyle onSubmit={handleTextSubmit}>
        <FormInput
          defaultValue={title}
          inputRef={titleRef}
          htmlFor="title"
          type="text"
          name="title"
          placeholder="Title"
        >
          題名:
        </FormInput>
        <FormTextArea
          defaultValue={content}
          textAreaRef={contentRef}
          htmlFor="content"
          name="content"
          placeholder="Content"
        >
          内容:
        </FormTextArea>
        <TaskFormSelect defaultValue={status} selectRef={statusRef} />
        <FormInput
          defaultValue={startDate}
          inputRef={startDateRef}
          htmlFor="startDate"
          type="date"
          name="startDate"
          placeholder="StartDate"
        >
          開始日:
        </FormInput>
        <FormInput
          defaultValue={endDate}
          inputRef={endDateRef}
          htmlFor="endDate"
          type="date"
          name="endDate"
          placeholder="EndDate"
        >
          終了日:
        </FormInput>
        <FormButtonCover>
          <FormSubmitButton isButtonDisabled={isButtonDisabled}>
            {!title ? "作成" : "更新"}
          </FormSubmitButton>
        </FormButtonCover>
      </TaskFormStyle>
    </TaskFormCover>
  );
};

TaskForm.propTypes = {
  handleTextSubmit: PropTypes.func.isRequired,
  inputRefs: PropTypes.shape({
    contentRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    endDateRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    startDateRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    statusRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
    titleRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
  }).isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  taskData: PropTypes.shape({
    task: PropTypes.shape({
      content: PropTypes.string,
      endDate: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const TaskFormCover = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

const TaskFormStyle = styled.form`
  min-width: 260px;
  max-width: 360px;
  padding: 0 10px;
  text-align: left;
  > label,
  select {
    display: block;
    margin-bottom: 14px;
  }
`;

const FormButtonCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px 0;
`;
