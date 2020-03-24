import * as React from "react";

export interface IErrorBoundryState {
  hasError?: boolean;
  error?: Error;
  info?: React.ErrorInfo;
}
export class ErrorBoundry extends React.Component<{}, IErrorBoundryState> {
  public state = {
    error: new Error(),
    hasError: false,
    info: undefined as unknown as React.ErrorInfo,
  };

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error: error ? error : new Error(),
      hasError: true,
      info: errorInfo,
    });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Oops!!! Something went wrong</h1>
          <p>The error: {this.state.error.toString()}</p>
          <p>Where it occured: {this.state.info ? this.state.info.componentStack : ""}</p>
          <p>Stack: {this.state.error.stack}</p>
        </div>
      );

    } else {
      return this.props.children;
    }
  }
}
