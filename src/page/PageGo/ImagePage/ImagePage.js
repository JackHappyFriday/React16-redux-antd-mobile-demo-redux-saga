/**
 * Created by jack on 2019/3/19
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderJ from '../../../components/Header';
import '../../../assets/css/publiccss.css';
import IconImageJ from '../../../components/IconImage/IconImageJ';

const dataAllArray = [];
for (let i = 1; i <= 30; i += 1) {
  dataAllArray.push(`jack${i}`);
}

class ImagePage extends PureComponent {
  constructor(props) {
    super(props);
    console.log('ImagePage--constructor', props);
  }

  componentDidMount() {
    // console.log('ImagePage--componentDidMount')
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Fragment>
        <div className="jp-container">
          <HeaderJ {...this.props} titleText="Image Page" />
          <h4>Load Image Component</h4>
          <div className="jp-content">
            <IconImageJ src="https://qa.cloudpense.com/h5/assets/images/test01.jpg" />
            <br /> <br />
            <h4>加载不到图片显示(而且添加了border边框)</h4>
            <IconImageJ border src="https://qa.cloudpense.com/h5/assets/images/test011.jpg" />
          </div>

          {/* <div className="jp-footer" /> */}
        </div>
      </Fragment>
    );
  }
}


ImagePage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagePage);
