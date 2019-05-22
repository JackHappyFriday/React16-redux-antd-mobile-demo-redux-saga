/**
 * Created by jack on 2019/3/19
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Styled from './TestPage.model.less';
import '../../assets/css/publiccss.css';

class TestPage extends PureComponent {
  constructor(props) {
    super(props);
    console.log('TestPage--constructor', props);
  }

  componentDidMount() {
    console.log('TestPage--componentDidMount');
  }

  componentWillUnmount() {
  }

  render() {
    // console.log('TestPage--render', this.props)
    const { match: { params: { userId } } } = this.props;
    return (
      <div className={Styled.testpageMainDiv}>
        TestPage--new {userId}
      </div>
    );
  }
}

TestPage.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
