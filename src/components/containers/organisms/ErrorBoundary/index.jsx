import React from 'react';
import PropTypes from 'prop-types';
import { NextButtonLink } from '../../../presentational/atoms/Link/NextButtonLink';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  };

  static getDerivedStateFromError(error) {
    return { error };
  };

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  };

  render() {
    if (this.state.error) {
      // return <h1>An error has occurred: {this.state.error.message}</h1>;
      console.error(this.state.error);
      return (
        <>
          <div>エラーが発生しました。</div>
          <NextButtonLink text="タスク一覧に戻る" url="/tasks" />
        </>
      );
    }

    return this.props.children;
  };
};

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};