/**
 * Created by jack on 2019/3/19
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import HeaderJ from '../../../components/Header';
import SimpleForm from './components/SimpleForm';
import { toastInfo } from '../../../utils/toastUtils';
import '../../../assets/css/publiccss.css';


class FormPage extends PureComponent {
  constructor(props) {
    super(props);
    console.log('FormPage--constructor', props);
  }

  componentDidMount() {
    // console.log('FormPage--componentDidMount')
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Fragment>
        <div className="jp-container">
          <HeaderJ {...this.props} titleId="title.component_desc" showLeft={false} />
          <div className="jp-content">
            <SimpleForm onSubmit={(values) => {
              console.log('SimpleForm-onSubmit', values);
              toastInfo(`${JSON.stringify(values)}`);
            }}
            />
            <Button onClick={() => {
              console.log('selector');
            }}
            >test
            </Button>
          </div>

          <div className="jp-footer" />
        </div>
      </Fragment>
    );
  }
}

FormPage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
