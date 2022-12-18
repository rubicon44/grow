import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// todo: This Form is probably organisms, isn't it?
export const Form = (props) => {
  // todo: propsを変数に格納せずに取り出すのは、Formを適切に分割してから行う。
  const { load } = props;
  const { handleTextSubmit } = props;
  const { title, setTitle } = props;
  const { content, setContent } = props;
  const { status, setStatus } = props;
  const { startDate, setStartDate } = props;
  const { endDate, setEndDate } = props;

  // todo: 下記setState群はまとめるべきか?
  const setTitleFunc = (e) => {
    setTitle(e.target.value);
  }

  const setContentFunc = (e) => {
    setContent(e.target.value);
  }

  const setStatusFunc = (e) => {
    setStatus(Number(e.target.value));
  }

  const setStartDateFunc = (e) => {
    setStartDate(e.target.value);
  }

  const setEndDateFunc = (e) => {
    setEndDate(e.target.value);
  }

  return (
    <FormCover>
      <form onSubmit={handleTextSubmit}>
        <FormTitleCover>
          <label htmlFor="title">題名:
            <input
              type="text"
              name="title"
              defaultValue={title}
              onChange={setTitleFunc}
              placeholder="Title"
            />
          </label>
        </FormTitleCover>
        <FormTextAreaCover>
          <label htmlFor="content">内容:
            <textarea
              name="content"
              defaultValue={content}
              onChange={setContentFunc}
              placeholder="Content"
              cols="80"
              rows="3"
            />
          </label>
        </FormTextAreaCover>
        <FormInputCover>
          <select value={status} onChange={setStatusFunc}>
            <option value="0">未対応</option>
            <option value="1">処理中</option>
            <option value="2">処理済み</option>
            <option value="3">完了</option>
          </select>
        </FormInputCover>
        <FormInputCover>
          <label htmlFor="startDate">開始日:
              <input
                type="date"
                name="startDate"
                defaultValue={startDate}
                onChange={setStartDateFunc}
                placeholder="StartDate"
              />
            </label>
        </FormInputCover>
        <FormInputCover>
          <label htmlFor="endDate">終了日:
              <input
                type="date"
                name="endDate"
                defaultValue={endDate}
                onChange={setEndDateFunc}
                placeholder="EndDate"
              />
            </label>
        </FormInputCover>
        <FormButtonCover>
          <button type="submit" disabled={load}>{!title ? '作成' : '更新'}</button>
        </FormButtonCover>
      </form>
    </FormCover>
  );
}

const FormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
`;

const FormTitleCover = styled.div`
  margin-bottom: 10px;
  > label {
    display: block;
    > input {
      min-width: 260px;
    }
  }
`;

const FormTextAreaCover = styled.div`
  margin-bottom: 10px;
  > label {
    display: block;
    > textarea {
      min-width: 260px;
      min-height: 200px;
    }
  }
`;

const FormInputCover = styled.div`
  margin-bottom: 10px;
  > label {
    display: block;
  }
`;

const FormButtonCover = styled.div`
  display: flex;
  justify-content: flex-end;
`;

Form.defaultProps = {
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

Form.propTypes = {
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