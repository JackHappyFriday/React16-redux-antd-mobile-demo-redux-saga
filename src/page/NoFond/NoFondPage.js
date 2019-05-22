/**
 * Created by jack on 2019/3/19
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import '../../assets/css/publiccss.css';

class NoFondPage extends PureComponent {
  constructor(props) {
    super(props);
    console.log('NoFondPage--constructor', props);
  }

  componentDidMount() {
    console.log('NoFondPage--componentDidMount');
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
          NoFond--new
        {intl.get('test')}
      </div>
    );
  }
}

NoFondPage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NoFondPage);
