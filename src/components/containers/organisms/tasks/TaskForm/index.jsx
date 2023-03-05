import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormInput } from '../../../../presentational/atoms/input/formInput';
import { FormSubmitButton } from '../../../../presentational/atoms/button/formSubmitButton';
import { FormTextArea } from '../../../../presentational/atoms/textArea/formTextArea';
import { TaskFormSelect } from './ui/taskFormSelect';

export const TaskForm = ({ handleTextSubmit, inputRefs, isButtonDisabled, taskData }) => {
  const { title, content, status, startDate, endDate } = taskData.task;
  const { titleRef, contentRef, statusRef, startDateRef, endDateRef } = inputRefs;
  return (
    <TaskFormCover>
      <form onSubmit={handleTextSubmit}>
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
        <TaskFormSelect
          defaultValue={status}
          selectRef={statusRef}
        />
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
        <FormSubmitButton isButtonDisabled={isButtonDisabled}>{!title ? '作成' : '更新'}</FormSubmitButton>
      </form>
    </TaskFormCover>
  );
};

const TaskFormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
`;

TaskForm.defaultProps = {
  handleTextSubmit: () => {},
  title: '',
  setTitle: () => {},
  content: '',
  setContent: () => {},
  status: 0,
  setStatus: () => {},
  startDate: '',
  setStartDate: () => {},
  endDate: 0,
  setEndDate: () => {},
  load: false,
};

TaskForm.propTypes = {
  handleTextSubmit: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  content: PropTypes.string,
  setContent: PropTypes.func,
  status: PropTypes.number,
  setStatus: PropTypes.func,
  startDate: PropTypes.string,
  setStartDate: PropTypes.func,
  endDate: PropTypes.string,
  setEndDate: PropTypes.func,
  load: PropTypes.bool,
};