/**
 * 语言设置页面
 * Created by jack on 2019/5/9
 */

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '@assets/css/publiccss.css';
import LocalesSelectJ from '@components/LocalesSelect/LocalesSelectJ';
import HeaderJ from '@components/Header';

class LocalePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      headerKey: Math.random(),
    };
    // console.log('LocalePage--constructor', props)
  }

  componentDidMount() {
    // console.log('LocalePage--componentDidMount')
  }

  componentWillUnmount() {}

  render() {
    const { headerKey } = this.state;
    return (
      <Fragment>
        <HeaderJ key={headerKey} {...this.props} titleId="language.changeText" />
        <LocalesSelectJ refreshHeaderFun={() => {
          this.setState({
            headerKey: Math.random(),
          });
        }}
        />
      </Fragment>
    );
  }
}

LocalePage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalePage);
