import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { TasksList } from '../../organisms/tasks/tasksList';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`;

export function TaskIndexTemplate(props) {
  const { tasks } = props;
  return (
    <>
      <Header />
      <Main>
        <TasksList tasks={tasks} />
      </Main>
    </>
  );
}

TaskIndexTemplate.defaultProps = {
  tasks: [],
};

TaskIndexTemplate.propTypes = {
  // todo: objectはオブジェクトの中のあたいの方までは厳密に定義しないため非推奨となっている。
  //       このため、tasksという大きなオブジェクトを全て渡してしまうと全ての型を定義することになるため、親コンポーネントで数を制御する。
  tasks: PropTypes.arrayOf(PropTypes.object),
  // tasks: PropTypes.arrayOf(PropTypes.exact({
  //   id: PropTypes.number,
  //   title: PropTypes.string
  // }))
};
