import React from 'react';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import Routes from '../router/index';
import SuspendJPage from '@/components/Suspend/Loadable';
import Styled from './App.module.less';

const App = () => {
  return (
    <div className={Styled['app-main-div']}>
      <SuspendJPage />
      <Routes />
    </div>
  );
};

App.propTypes = {
  props: PropTypes.object, // eslint-disable-line
};

App.defaultProps = {
  props: {},
};

/* https://github.com/gaearon/react-hot-loader#getting-started */
export default hot(App);
