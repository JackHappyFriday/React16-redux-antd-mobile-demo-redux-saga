/**
 * Created by jack on 2019/3/19
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderJ from '@components/Header';
import TabBarJ from '@components/TabBar';
import '@/assets/css/publiccss.css';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    console.log('HomePage--constructor', props);
  }

  componentDidMount() {
    // console.log('HomePage--componentDidMount');
    // console.log('componentDidMount', this.contentNode);
    // if (this.contentNode) {
    //   this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
    //   this.contentNode.scrollTop = scrollTop
    // }
  }

  componentWillUnmount() {
    // if (this.contentNode) {
    //   this.contentNode.removeEventListener('scroll', this.onScrollHandle.bind(this));
    //   scrollTop = this.contentNode.scrollTop
    // }
  }

  render() {
    return (
      <Fragment>
        <div className="jp-container">
          <HeaderJ {...this.props} titleId="tab.claim" showLeft={false} />
          <div
            className="jp-tab-content"
            ref={node => {
              this.contentNode = node;
            }}
          >
            Home
          </div>
          <div className="jp-tab-footer">
            <TabBarJ {...this.props} />
          </div>
        </div>
      </Fragment>
    );
  }
}

HomePage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
