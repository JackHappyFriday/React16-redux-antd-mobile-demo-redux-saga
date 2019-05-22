/**
 * Created by jack on 2019/3/19
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderJ from '@components/Header';
import TabBarJ from '@components/TabBar';
import '@assets/css/publiccss.css';
import Styled from './Book.module.less';

class BookPage extends PureComponent {
  constructor(props) {
    super(props);
    console.log('BookPage--constructor', props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Fragment>
        <div className="jp-container">
          <HeaderJ {...this.props} titleId="tab.booking" showLeft={false} />
          <div className="jp-tab-content">
            <span className={Styled.test}>Book</span><br />

          </div>

          <div className="jp-tab-footer">
            <TabBarJ {...this.props} />
          </div>
        </div>
      </Fragment>
    );
  }
}

BookPage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
