/**
 * @description: TabBar
 * @author jack
 * @date 2019/3/16
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import intl from 'react-intl-universal';
import IconSvgJ from '@components/IconSvg/IconSvgJ';
import '@assets/images/workbench_grey.svg';
import '@assets/images/workbench_blue.svg';
import '@assets/images/approvallist_grey.svg';
import '@assets/images/approvallist_blue.svg';
import '@assets/images/booking_grey.svg';
import '@assets/images/booking_blue.svg';
import '@assets/images/me_grey.svg';
import '@assets/images/me_blue.svg';
import Styled from './TabBarJ.module.less';

class TabBarJ extends PureComponent {
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { history, children, location } = this.props;
    const { pathname } = location;
    return (
      <div className={Styled.tabbarJContainer}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={false}
          noRenderContent={false}
          prerenderingSiblingsNumber={1}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title={<span className={Styled.tabbarJTitle}>{intl.get('tab.claim')}</span>}
            key="claim"
            icon={
              <IconSvgJ svgId="workbench_grey" className={Styled.tabbarJIcon} />
            }
            selectedIcon={
              <IconSvgJ svgId="workbench_blue" className={Styled.tabbarJIcon} />
            }
            selected={pathname === '/'}
            badge={1}
            onPress={() => {
              history.push('/');
            }}
            data-seed="logId"
          >
            {children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <IconSvgJ svgId="approvallist_grey" className={Styled.tabbarJIcon} />
            }
            selectedIcon={
              <IconSvgJ svgId="approvallist_blue" className={Styled.tabbarJIcon} />
            }
            title={<span className={Styled.tabbarJTitle}>{intl.get('tab.approval')}</span>}
            key="approval"
            badge="new"
            selected={pathname === '/approval'}
            onPress={() => {
              history.push('/approval');
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <IconSvgJ svgId="booking_grey" className={Styled.tabbarJIcon} />
            }
            selectedIcon={
              <IconSvgJ svgId="booking_blue" className={Styled.tabbarJIcon} />
            }
            title={<span className={Styled.tabbarJTitle}>{intl.get('tab.booking')}</span>}
            key="book"
            dot
            selected={pathname === '/book'}
            onPress={() => {
              history.push('/book');
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <IconSvgJ svgId="me_grey" className={Styled.tabbarJIcon} />
            }
            selectedIcon={
              <IconSvgJ svgId="me_blue" className={Styled.tabbarJIcon} />
            }
            title={<span className={Styled.tabbarJTitle}>{intl.get('tab.me')}</span>}
            key="me"
            selected={pathname === '/me'}
            onPress={() => {
              history.push('/me');
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

TabBarJ.propTypes = {
  history: PropTypes.object, //eslint-disable-line
  children: PropTypes.object, //eslint-disable-line
  location: PropTypes.object, //eslint-disable-line
};


export default TabBarJ;
