/**
 * Created by jack on 2019/3/19
 * https://www.npmjs.com/package/react-router-cache-route
 * https://blog.csdn.net/achenyuan/article/details/82839024
 * https://github.com/CJY0208/react-router-cache-route
 */

import React, { Fragment, PureComponent } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import authUtils from '../utils/authUtils';
import routerMap from './routerMap';
import routerAnimationMap from './routerAnimationMap';

import '../assets/css/animation.css';


class IndexRouter extends PureComponent {
  render() {
    const { location } = this.props; // eslint-disable-line
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={1000}
            classNames="right"
            // unMountOnExit // 可选，当动画出场后在页面上移除包裹的dom节点
            onEntered={(el) => { // eslint-disable-line
              // console.log('animation--onEntered', el)
              // el.style.color = 'blue'; // 可选，动画入场之后的回调，el指被包裹的dom，让div内的字体颜色等于蓝色
            }}
            onExited={(el) => { // eslint-disable-line
              // console.log('animation--onExited', el) // 同理，动画出场之后的回调，也可以在这里来个setState啥的操作
            }}
          >
            <CacheSwitch location={location}>
              {routerAnimationMap.map((item) => {
                return (
                  <CacheRoute
                    key={item.name}
                    path={item.path}
                    exact={item.exact}
                    cacheKey={item.name}
                    render={(props) => {
                      // 判断是否需要认证，token是否存在
                      const authFlag = item.auth;
                      if (!authFlag) {
                        return <item.component {...props} />;
                      }
                      if (authUtils.auth()) {
                        return <item.component {...props} />;
                      }
                      // 如果token不存在跳转到登录
                      return (
                        <Redirect to={{
                          pathname: '/login',
                          state: { from: props.location },
                        }}
                        />
                      );
                    }}
                  />
                );
              })}
            </CacheSwitch>
          </CSSTransition>
        </TransitionGroup>
        <CacheSwitch location={location}>
          {routerMap.map((item) => {
            return (
              <CacheRoute
                key={item.name}
                path={item.path}
                exact={item.exact}
                cacheKey={item.name}
                render={(props) => {
                  // 判断是否需要认证，token是否存在
                  const authFlag = item.auth;
                  if (!authFlag) {
                    return <item.component {...props} />;
                  }
                  if (authUtils.auth()) {
                    return <item.component {...props} />;
                  }
                  // 如果token不存在跳转到登录
                  return (
                    <Redirect to={{
                      pathname: '/login',
                      state: { from: props.location },
                    }}
                    />
                  );
                }}
              />
            );
          })}
        </CacheSwitch>
      </Fragment>
    );
  }
}

export default withRouter(IndexRouter);


