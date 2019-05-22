/**
 * Created by jack on 2019/3/19
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, WhiteSpace } from 'antd-mobile';
import HeaderJ from '@components/Header';
import TabBarJ from '@/components/TabBar';
import '@assets/css/publiccss.css';
import ArrowItemJ from '@components/ArrowItem';
import { bindActionCreators } from 'redux';
import { userDataAction } from '@action';
import __isEmpty from 'lodash/isEmpty';
import { getMePageData } from './business/dataUtils';
import Styled from './MePage.module.less';

class MePage extends PureComponent {
  constructor(props) {
    super(props);
    console.log('MePage--constructor', props);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      console.log('a-did');
    });
    const { action, userData } = this.props;
    if (__isEmpty(userData)) {
      action.userDataAction();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {
      console.log('a-und');
    });
  }

  render() {
    console.log('render--');
    const { history } = this.props;
    return (
      <Fragment>
        <div className="jp-container">
          <HeaderJ {...this.props} titleId="tab.me" showLeft={false} />
          <div className="jp-tab-content">
            <List className={Styled['me-list']}>
              {
                getMePageData() && getMePageData().map(item => {
                  return (
                    <Fragment key={item.id}>
                      <ArrowItemJ
                        itemData={item}
                        clickFun={() => {
                          if (item.url) {
                            history.push(item.url);
                          }
                        }}
                      />
                      { item.block ? <Fragment><WhiteSpace size="lg" /></Fragment> : null}
                    </Fragment>
                  );
                })
              }
            </List>

          </div>
          <div className="jp-tab-footer">
            <TabBarJ {...this.props} />
          </div>
        </div>
      </Fragment>
    );
  }
}


MePage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps(state) {
  return {
    userData: state.userDataReducer.userDataObj,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    userDataAction,
  };
  return {
    action: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MePage);
