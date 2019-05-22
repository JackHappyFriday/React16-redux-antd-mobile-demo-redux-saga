/**
 * Created by jack on 2019/3/17
 * 自己制作地址：http://danilowoz.com/create-content-loader/
 */

import React, { PureComponent } from 'react';

import ReactPlaceholder from 'react-placeholder';
import Styled from 'react-placeholder/lib/reactPlaceholder.css';

/**
 * 说明： https://www.npmjs.com/package/react-placeholder
 * ['text', 'media', 'textRow', 'rect', 'round'],
 */
class ReactPlaceholderJ extends PureComponent {
  constructor(props) {
    super(props);
    console.log('ReactContentLoaderJ--constructor', props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={Styled.reactPlaceHolderMain}>
        <ReactPlaceholder type="media" rows={7} ready={false} showLoadingAnimation>
          <div>ReactPlaceholder</div>
        </ReactPlaceholder>
      </div>
    );
  }
}


export default ReactPlaceholderJ;
