import React, { PureComponent } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '@assets/css/animation.css';
import './leftright.less';

function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}
const LeftEnterRightOutHoc = WrappedComponent => class LeftEnterRightOutAnimation extends PureComponent {
  static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

  render() {
    // console.log('LeftEnterRightOutHoc', this.props);
    const { location } = this.props;
    console.log('LeftEnterRightOutHoc', location.pathname);
    return (
      <div>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={1000}
            classNames="right"
            // unMountOnExit // 可选，当动画出场后在页面上移除包裹的dom节点
            onEntered={(el) => {
              console.log('animation--onEntered', el);
              // el.style.color = 'blue'; // 可选，动画入场之后的回调，el指被包裹的dom，让div内的字体颜色等于蓝色
            }}
            onExited={(el) => {
              console.log('animation--onExited', el); // 同理，动画出场之后的回调，也可以在这里来个setState啥的操作
            }}
          >
            <WrappedComponent {...this.props} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
};


export default LeftEnterRightOutHoc;
