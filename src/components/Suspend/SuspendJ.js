/**
 * Created by jack on 2019/5/5
 * @description 悬浮快捷菜单
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import __isEqual from 'lodash/isEqual';
import memoizeOne from 'memoize-one';
import { suspendAction } from '@action/suspend';
import Styled from './SuspendJ.module.less';
import history from '@history';

class SuspendJ extends PureComponent {
  constructor(props) {
    super(props);
    const quickList = [
      { url: '/approval', text: '审批审批' },
      { url: '/', text: '单据' },
      { url: '/book', text: '预订' },
      { url: '/me', text: '我' },
      { url: '/other', text: '其他' },
      { url: '/login', text: '登录' },
    ];
    this.state = {
      showItem: false,
      showSuspend: true,
      quickList: quickList || [],
    };
  }

  componentDidMount() {
    document.addEventListener('touchend', this.handleClickOutside, false);
  }

  componentWillReceiveProps(nextProps) {
    const { suspendData } = this.props;
    // console.log('SuspendJ-componentWillReceiveProps', nextProps, nextContext);
    const beforeFun = memoizeOne(this.getPropsData, __isEqual);
    const afterFun = memoizeOne(this.getPropsData, __isEqual);
    // memoizeOne 性能优化 处理 参考： https://www.npmjs.com/package/memoize-one
    // console.log('beforeFun === afterFun', (beforeFun(nextProps.suspendData) !== afterFun(suspendData)));
    if (beforeFun(nextProps.suspendData) !== afterFun(suspendData)) {
      this.setState({ showSuspend: nextProps.suspendData.showSuspend });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('touchend', this.handleClickInside, false);
  }

  getPropsData = (data) => {
    return data;
  }

  handleClickInside = () => {
    // console.log('handleClickInside', e.target, this.contentNode);
    this.setState({
      showItem: false,
    });
  }

  handleClickOutside = (e) => {
    const { showItem } = this.state;
    // console.log('handleClickOutside', e.target, this.contentNode, e.target !== this.contentNode, showItem);
    // e.target !== this.contentNode
    // 点击就关闭 不关心点击什么位置, 下面判断增加优化处理，减少渲染次数
    if (e.target !== this.contentNode && showItem) {
      this.setState({
        showItem: false,
      });
    }
  }

  renderItemList = () => {
    const { quickList, showItem } = this.state;
    if (quickList && quickList.length > 0) {
      const rotate = -30 / quickList.length;
      return quickList.map((item, index) => {
        const rotateItem = rotate * (index + 1);
        // console.log('renderItemList', rotateItem, this.props);
        const style = {
          transform: `rotateZ(${rotateItem}deg)`,
        };
        return (
          <div // eslint-disable-line
            key={item.url + item.text}
            className={Styled['suspend-j-content-item']}
            style={style}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              this.setState({
                showItem: !showItem,
              });
              history.push(item.url);
            }}
          >
            {item.text}
          </div>
        );
      });
    }
    return null;
  }

  render() {
    const { showItem, showSuspend } = this.state;
    if (!showSuspend) {
      return null;
    }
    return (
      <div className={Styled['suspend-j-main']}>
        <div
          className={Styled['suspend-j-content']}
        >
          {
            showItem ? (
              <div className={Styled['suspend-j-content-left']}>
                {this.renderItemList()}
              </div>
            ) : null
          }
          <div // eslint-disable-line
            ref={node => {
              this.contentNode = node;
            }}
            role="button"
            className={Styled['suspend-j-content-right']}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              this.setState({
                showItem: !showItem,
              });
            }}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

SuspendJ.propTypes = {
  showSuspend: PropTypes.bool,
  suspendData: PropTypes.objectOf(PropTypes.bool),
};

SuspendJ.defaultProps = {
  suspendData: { showSuspend: true },
  showSuspend: true,
};

function mapStateToProps(state) {
  return {
    suspendData: state.suspendReducer.suspendDataObj,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    suspendAction,
  };
  return {
    action: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuspendJ);
