/**
 * Created by jack on 2019/3/19
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderJ from '@components/Header';
import TabBarJ from '@components/TabBar';
import '@assets/css/publiccss.css';
import Styled from './Approval.module.less';


class ApprovalPage extends PureComponent {
  constructor(props) {
    super(props);
    console.log('ApprovalPage--constructor', props);
  }

  componentDidMount() {
    // console.log('ApprovalPage--componentDidMount')
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Fragment>
        <div className="jp-container">
          <HeaderJ {...this.props} titleId="tab.approval" showLeft={false} />
          <div className="jp-tab-content">
            <span className={Styled.test}>Approval1111</span>
          </div>

          <div className="jp-tab-footer">
            <TabBarJ {...this.props} />
          </div>
        </div>
      </Fragment>
    );
  }
}

ApprovalPage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(ApprovalPage);
