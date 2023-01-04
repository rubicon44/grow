import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormInput } from 'components/presentational/atoms/Input/FormInput';
import { FormSubmitButton } from 'components/presentational/atoms/Button/FormSubmitButton';
import { FormTextArea } from 'components/presentational/atoms/TextArea/FormTextArea';
import { TaskFormSelect } from 'components/containers/organisms/Tasks/TaskForm/ui/TaskFormSelect';

export const TaskForm = ({ handleTextSubmit, inputRef, load, taskData }) => {
  const { title, content, status, startDate, endDate } = taskData.task;
  const { inputTitleRef, textAreaContentRef, selectStatusRef, inputStartDateRef, inputEndDateRef } = inputRef;

  return (
    <TaskFormCover>
      <form onSubmit={handleTextSubmit}>
        <FormInput
          defaultValue={title}
          inputRef={inputTitleRef}
          htmlFor="title"
          type="text"
          name="title"
          placeholder="Title"
        >
          題名:
        </FormInput>
        <FormTextArea
          defaultValue={content}
          textAreaRef={textAreaContentRef}
          htmlFor="content"
          name="content"
          placeholder="Content"
        >
          内容:
        </FormTextArea>
        <TaskFormSelect
          defaultValue={status}
          selectRef={selectStatusRef}
        />
        <FormInput
          defaultValue={startDate}
          inputRef={inputStartDateRef}
          htmlFor="startDate"
          type="date"
          name="startDate"
          placeholder="StartDate"
        >
          開始日:
        </FormInput>
        <FormInput
          defaultValue={endDate}
          inputRef={inputEndDateRef}
          htmlFor="endDate"
          type="date"
          name="endDate"
          placeholder="EndDate"
        >
          終了日:
        </FormInput>
        <FormSubmitButton load={load}>{!title ? '作成' : '更新'}</FormSubmitButton>
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