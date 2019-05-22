/**
 * Created by jack on 2019/3/19
 * Button 组件 说明
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderJ from '../../../components/Header';
import '../../../assets/css/publiccss.css';
import { toastInfo, toastWarn, toastError, toastDefault } from '../../../utils/toastUtils';
import LineButtonJ from '../../../components/Button/LineButtonJ';

class ButtonPage extends PureComponent {
  componentDidMount() {
    // console.log('ImagePage--componentDidMount')
  }

  componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <div className="jp-container">
          <HeaderJ {...this.props} titleText="Button Page" />
          <h4>Button Component</h4>
          <pre>
            clickFun、itemData是必须输入的参数
          </pre>
          <div className="jp-content">
            <div>
              <LineButtonJ
                itemData={{ buttonText: 'Delete',
                  buttonId: 'button.back',
                  type: LineButtonJ.DELETE,
                  style: {
                    maxWidth: '30vw',
                    width: '30vw',
                    // height: '2.4rem',
                    // lineHeight: '2.4rem',
                  },
                }}
                clickFun={() => {
                  console.log('i am delete button click');
                  toastError('i am delete button click');
                }}
              />
              <LineButtonJ
                itemData={{ buttonText: 'Warning',
                  buttonId: 'button.back',
                  type: LineButtonJ.WARN,
                  style: {
                    maxWidth: '30vw',
                    width: '30vw',
                    // height: '2.4rem',
                    // lineHeight: '2.4rem',
                  },
                }}
                clickFun={() => {
                  console.log('i am warn button click');
                  toastWarn('i am warn button click');
                }}
              />
              <LineButtonJ
                itemData={{ buttonText: 'Info',
                  buttonId: 'button.cancel',
                  type: LineButtonJ.INFO,
                  style: {
                    maxWidth: '20vw',
                    width: '20vw',
                  },
                }}
                clickFun={() => {
                  console.log('i am info button click');
                  toastInfo('i am info button click');
                }}
              />
              <LineButtonJ
                itemData={{ buttonText: 'Cancel',
                  buttonId: 'button.cancel',
                  type: LineButtonJ.CANCEL,
                  classname: 'jack-cancel',
                  style: {
                    maxWidth: '20vw',
                    width: '20vw',
                  },
                }}
                clickFun={() => {
                  console.log('i am cancel button click');
                  toastDefault('i am cancel button click');
                }}
              />
            </div>
            <br />
            <div>
              <LineButtonJ
                itemData={{ buttonText: '我是文字过长，我设置20vw，但是文字有点长',
                  buttonId: 'button.cancel',
                  type: LineButtonJ.INFO,
                  classname: 'jack-cancel',
                  style: {
                    maxWidth: '40vw',
                    width: '40vw',
                  },
                }}
                clickFun={() => {
                  console.log('i am info button click');
                }}
              />
            </div>
          </div>

          {/* <div className="jp-footer" /> */}
        </div>
      </Fragment>
    );
  }
}


ButtonPage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPage);
