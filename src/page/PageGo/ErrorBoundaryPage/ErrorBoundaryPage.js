/**
 * Created by jack
 * ErrorBoundaryPage
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderJ from '../../../components/Header';
import '../../../assets/css/publiccss.css';

class ErrorBoundaryPage extends PureComponent {
  constructor(props) {
    super(props);
    // console.log('ErrorBoundaryPage--constructor', props);
    this.state = {
      showThrow: false,
    };
  }

  componentDidMount() {
    // console.log('ErrorBoundaryPage--componentDidMount')
  }

  componentWillUnmount() {}

  render() {
    const { showThrow } = this.state;
    // throw new Error('I crashed!');
    // const a = [1, 2, 3];
    // const value = a[3].toString(); // 对 undefined 进行操作
    if (showThrow) {
      const a = [1, 2, 3];
      // eslint-disable-next-line
      const value = a[3].toString(); // 对 undefined 进行操作
      throw new Error('我主动跑出Error');
    }
    return (
      <div className="jp-container">
        <HeaderJ {...this.props} titleText="ErrorBoundary" />
        <div
          role="button"
          tabIndex={0}
          className="jp-content"
          onKeyDown={() => {}}
          onClick={() => {
            this.setState({ showThrow: true });
          }}
        >
          <h4>点我触发异常ErrorBoundary</h4>
        </div>

        <div className="jp-footer" />
      </div>
    );
  }
}


ErrorBoundaryPage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundaryPage);
