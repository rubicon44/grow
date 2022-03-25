import React from 'react';
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
  return (
    <FormCover>
      <form onSubmit={props.handleTextSubmit}>
        <FormTitleCover>
          <label htmlFor="title">題名:</label>
          <input type="text" name="title" defaultValue={props.title} onChange={ (e) => { props.setTitle(e.target.value) }} placeholder="Title" />
        </FormTitleCover>
        <FormTextAreaCover>
          <label htmlFor="content">内容:</label>
          <textarea name="content" onChange={ (e) => { props.setContent(e.target.value) }} placeholder="Content" cols="80" rows="3" defaultValue={props.content}></textarea>
        </FormTextAreaCover>
        <FormButtonCover><button type="submit" disabled={props.load}>作成</button></FormButtonCover>
      </form>
    </FormCover>
  )
}