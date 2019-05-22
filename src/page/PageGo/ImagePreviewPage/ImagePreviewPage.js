/**
 * Created by jack on 2019/3/19
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import HeaderJ from '../../../components/Header';
import ErrorBoundary from '../../../components/ErrorBoundary';
import '../../../assets/css/publiccss.css';

const dataAllArray = [];
for (let i = 1; i <= 30; i += 1) {
  dataAllArray.push(`jack${i}`);
}

const urls = [
  'https://qa.cloudpense.com/h5/assets/images/test01.jpg',
  'https://qa.cloudpense.com/h5/assets/images/test02.jpg',
  'https://qa.cloudpense.com/h5/assets/images/test03.jpg',
  'https://qa.cloudpense.com/h5/assets/images/test04.jpg',
];


class ImagePreviewPage extends PureComponent {
  constructor(props) {
    super(props);
    console.log('ImagePreviewPage--constructor', props);
  }

  componentDidMount() {
    // console.log('ImagePreviewPage--componentDidMount')
  }

  componentWillUnmount() {
  }

  render() {
    const { history } = this.props;
    return (
      <Fragment>
        <ErrorBoundary>
          <div className="jp-container">
            <HeaderJ {...this.props} titleText="ImagePreview Page" />
            <h4>Show ImageView Component</h4>
            <div className="jp-content">
              <Button onClick={() => {
                history.push({ pathname: '/image', state: { imageArray: urls } });
              }}
              >点我 ImagePreview
              </Button>
            </div>

            {/* <div className="jp-footer" /> */}
          </div>
        </ErrorBoundary>
      </Fragment>
    );
  }
}


ImagePreviewPage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagePreviewPage);
