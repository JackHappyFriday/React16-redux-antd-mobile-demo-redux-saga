/**
 * 这个有旋转功能 https://segmentfault.com/a/1190000017290976
 * https://github.com/wtfjun/cxjReactImage
 * demo https://wtfjun.github.io/cxjReactImage/build/
 * react-wx-images-viewer组件的使用
 * https://ctolib.com/topics-120337.html
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WxImageViewer from 'react-wx-images-viewer';
import './ImageViewJ.module.less';

class ImageViewJ extends Component {
  onClose = () => {
    const { history } = this.props;
    if (history) {
      history.goBack();
    }
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const imageArray = (state && state.imageArray) || [];
    return (
      <WxImageViewer onClose={this.onClose} urls={imageArray} index={0} />
    );
  }
}

ImageViewJ.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ImageViewJ;
