import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
`

const FormTitleCover = styled.div`
  margin-bottom: 10px;

  > label {
    display: block;
  }

  > input {
    min-width: 260px;
  }
`

const FormTextAreaCover = styled.div`
  margin-bottom: 10px;

  > label {
    display: block;
  }

  > textarea {
    min-width: 260px;
    min-height: 200px;
  }
`

const FormButtonCover = styled.div`
  display: flex;
  justify-content: flex-end;
`

export function Form(props) {
  const handleTextSubmit = props.handleTextSubmit;
  const title = props.title;
  const setTitle = props.setTitle;
  const content = props.content;
  const setContent = props.setContent;
  const load = props.load;
  return (
    <FormCover>
      <form onSubmit={handleTextSubmit}>
        <FormTitleCover>
          <label htmlFor="title">題名:</label>
          <input type="text" name="title" defaultValue={title} onChange={ (e) => { setTitle(e.target.value) }} placeholder="Title" />
        </FormTitleCover>
        <FormTextAreaCover>
          <label htmlFor="content">内容:</label>
          <textarea name="content" onChange={ (e) => { setContent(e.target.value) }} placeholder="Content" cols="80" rows="3" defaultValue={content}></textarea>
        </FormTextAreaCover>
        <FormButtonCover>
          <button type="submit" disabled={load}>
            { !title ? "作成" : "更新" }
          </button></FormButtonCover>
      </form>
    </FormCover>
  )
}

Form.propTypes = {
  handleTextSubmit: PropTypes.func,
  title: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  setTitle: PropTypes.func,
  content: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  setContent: PropTypes.func,
  load: PropTypes.bool
};