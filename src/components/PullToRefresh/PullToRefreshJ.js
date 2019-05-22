/**
 * 该方式是一次性把所有数据都返回的情况，如果实时从服务器获取数据，该组件不支持，同时显示明细的Item组件需要传入
 * 有空可以研究 import LazyLoad from 'react-lazyload';
 * https://github.com/twobin/react-lazyload
 * https://twobin.github.io/react-lazyload/examples/#/?_k=spnpd1
 * @description: 下拉刷新 components
 * @author jack
 * @date 20190415
 */
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh, ActivityIndicator } from 'antd-mobile';

import PropTypes from 'prop-types';
import __cloneDeep from 'lodash/cloneDeep';
import { PAGE_SIZE_DEFAULT, PULL_TO_FRESH_TIME_OUT } from '@/constants/constants';
import Styled from './PullToRefresh.module.less';

/**
 * 刷新指示器内容
 * @param props
 * @return {*}
 * @constructor
 */
const IndicatorSpan = (props) => {
  const { text, cssClassName, animating } = props;
  return (
    <div className={cssClassName}>
      <div><ActivityIndicator animating={animating} /></div>
      <div className={Styled['indicator-text']}>{text}</div>
    </div>
  );
};

IndicatorSpan.propTypes = {
  text: PropTypes.string.isRequired,
  cssClassName: PropTypes.string.isRequired,
  animating: PropTypes.bool, // eslint-disable-line
};

class PullToRefreshJ extends PureComponent {
  constructor(props) {
    super(props);
    // eslint-disable-next-line
    const clientHeight = document.documentElement.clientHeight;
    this.state = {
      refreshing: false,
      down: true,
      height: clientHeight,
      dataArray: [],
    };
  }

  componentDidMount() {
    // console.log('PullToRefreshJ -- componentDidMount', this.props);
    // 初始化数据
    this.initialData();
  }

  /**
   * 初始化下拉数据
   */
  initialData = () => {
    const { height } = this.state;
    const { dataAllArray, pageSize } = this.props;
    // eslint-disable-next-line
    const offsetTopHeight = ReactDOM.findDOMNode(this.pullToRefreshRef).offsetTop;
    const pullToRefreshHeight = height - offsetTopHeight;
    if (dataAllArray && Array.isArray(dataAllArray) && dataAllArray.length > 0) {
      // 当传入的数据大于0时向state赋值操作
      const dataAllArrayLength = dataAllArray.length;
      const pageSizeLength = pageSize || PAGE_SIZE_DEFAULT;
      if (pageSizeLength >= dataAllArrayLength) {
        setTimeout(() => this.setState({
          height: pullToRefreshHeight,
          dataArray: dataAllArray || [],
        }), PULL_TO_FRESH_TIME_OUT);
      } else {
        // 如果不是，只是显示第一个pageSize的值
        const currentPageDataArray = dataAllArray.slice(0, pageSizeLength);
        setTimeout(() => this.setState({
          height: pullToRefreshHeight,
          dataArray: currentPageDataArray || [],
        }), PULL_TO_FRESH_TIME_OUT);
      }
    }
  }


  getPullToRefreshData = () => {
    // 最先开始判断，如果数据的总长度就没有一页，这时下拉刷新也没数据
    const { dataArray } = this.state;
    const { dataAllArray, pageSize } = this.props;
    const pageSizeLength = pageSize || PAGE_SIZE_DEFAULT;
    const dataAllArrayLength = dataAllArray.length;
    if (pageSizeLength >= dataAllArrayLength) {
      setTimeout(() => this.setState({
        dataArray: dataAllArray || [],
      }), PULL_TO_FRESH_TIME_OUT);
      return;
    }

    // 1. 第1步显示loadding
    this.setState({
      refreshing: true,
    });
    // 2. 第2步获取数据
    const stateDataArray = __cloneDeep(dataArray || []) || [];
    let newDataArray = dataAllArray.slice(stateDataArray.length, (stateDataArray.length + pageSizeLength));
    newDataArray = stateDataArray.concat(newDataArray);
    setTimeout(() => this.setState({
      dataArray: newDataArray || [],
      refreshing: false,
    }), PULL_TO_FRESH_TIME_OUT);
  }

  render() {
    const { height, down, refreshing, dataArray } = this.state;
    const { ItemComponent } = this.props;
    return (
      <div className={Styled['pullToRefresh-main']}>
        <PullToRefresh
          damping={100}
          ref={(el) => {
            this.pullToRefreshRef = el;
          }}
          style={{
            height,
            overflow: 'auto',
          }}
          indicator={!down ? {} : { activate: <IndicatorSpan cssClassName={Styled['pull-activate']} animating={false} text="释放刷新" />,
            deactivate: <IndicatorSpan cssClassName={Styled['pull-deactivate']} animating={false} text="上拉可以刷新" />,
            release: <IndicatorSpan cssClassName={Styled['pull-release']} animating text="正在刷新" />,
            finish: <IndicatorSpan cssClassName={Styled['pull-finish']} animating={false} text="刷新完成" /> }}
          direction={down ? 'down' : 'up'}
          refreshing={refreshing}
          onRefresh={() => {
            this.getPullToRefreshData();
          }}
        >
          {dataArray && dataArray.map(item => (
            <div key={item} className={Styled['pull-item']}>
              <ItemComponent itemData={item} />
            </div>
          ))}
        </PullToRefresh>
      </div>
    );
  }
}

PullToRefreshJ.defaultProps = {
  pageSize: PAGE_SIZE_DEFAULT,
};

PullToRefreshJ.propTypes = {
  pageSize: PropTypes.number,
  ItemComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  dataAllArray: PropTypes.array.isRequired, // eslint-disable-line
};

export default PullToRefreshJ;
