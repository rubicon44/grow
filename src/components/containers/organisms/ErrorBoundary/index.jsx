import React from "react";
import PropTypes from "prop-types";
import { NextButtonLink } from "../../../presentational/atoms/Link/NextButtonLink";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    alert(error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      // return <h1>An error has occurred: {this.state.error.message}</h1>;
      alert(error);
      return (
        <>
          <div>エラーが発生しました。</div>
          <NextButtonLink text="タスク一覧に戻る" url="/tasks" />
        </>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
