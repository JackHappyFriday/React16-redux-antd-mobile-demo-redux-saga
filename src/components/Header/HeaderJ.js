/**
 * Created by jack on 2019/3/17
 * titleId 标题国际化ID，必填
 * showLeft 是否显示左侧按钮，默认显示
 * @description App头部
 */

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import { NavBar, Icon } from 'antd-mobile';
import { HEADER_HIDDEN_ALL } from '@/constants/constants';
import { isHiddenHeader, setWXTitle } from '@utils/platformUtils';
import Styled from './HeaderJ.module.less';

class HeaderJ extends PureComponent {
  componentDidMount() {}

  onLeftClick = () => {
    const { history } = this.props;
    // console.log('onLeftClick', this.props);
    history.goBack();
  };

  render() {
    const { titleId, showLeft, titleText } = this.props;
    if (HEADER_HIDDEN_ALL) {
      // 全局隐藏header
      return null;
    }
    if (isHiddenHeader()) {
      setWXTitle(titleText || (titleId && intl.get(titleId)));
      return null;
    }
    return (
      <Fragment>
        <NavBar
          mode="dark"
          icon={showLeft ? <Icon type="left" /> : null}
          leftContent={showLeft ? intl.get('nav.back').d('Back') : ''}
          onLeftClick={() => this.onLeftClick()}
        >
          <span className={Styled.navBarTitleSpan}>
            {
            titleText || (titleId && intl.get(titleId))
          }
          </span>
        </NavBar>
      </Fragment>
    );
  }
}

HeaderJ.propTypes = {
  history: PropTypes.object, //eslint-disable-line
  titleId: PropTypes.string,
  showLeft: PropTypes.bool,
  titleText: PropTypes.string,
};

HeaderJ.defaultProps = {
  history: {},
  showLeft: true,
  titleText: '',
  titleId: '',
};

export default HeaderJ;
