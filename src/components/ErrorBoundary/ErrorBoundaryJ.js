import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd-mobile';
import intl from 'react-intl-universal';
import Styled from './ErrorBoundaryJ.module.less';
import history from '../../redux/history';

class ErrorBoundaryJ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  // eslint-disable-next-line
  componentDidCatch(error, errorInfo) {
    // Display fallback UI
    // You can also log the error to an error reporting service
    this.setState({
      error,
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      return (
        <div className={Styled['error-boundary-j-main']}>
          <div className={Styled['error-boundary-j-title']}>Something went wrong</div>
          <div className={Styled['error-boundary-j-detail-title']}>Component Stack Error Details: </div>
          <details className={Styled['error-boundary-j-detail']}>
            <pre className={Styled['error-boundary-j-pre']}>
              {error.stack}
            </pre>
          </details>
          <Button
            className={Styled['error-boundary-j-back']}
            size="small"
            type="primary"
            onClick={() => {
              console.log('history', history);
              history.goBack();
              window.location.reload();
            }}
          >
            {intl.get('button.back')}
          </Button>
        </div>
      );
    }
    return children;
  }
}


ErrorBoundaryJ.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

export default ErrorBoundaryJ;
