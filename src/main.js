/* eslint-disable no-restricted-syntax */
/* https://redux.js.org/recipes/configuring-your-store
 https://github.com/supasate/connected-react-router#step-3
 20190330
 date-fns https://github.com/you-dont-need/You-Dont-Need-Momentjs#string--date-format

  */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'; // eslint-disable-line
import intl from 'react-intl-universal';
import { AppContainer } from 'react-hot-loader';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import LocaleProvider from 'antd-mobile/lib/locale-provider';
import { toast, Zoom } from 'react-toastify';
import initReactFastClick from 'react-fastclick';
import configureStore from './redux/configureStore';
import history from './redux/history';
import App from './page/App';
import locales from './locales/localeResource';
import storage from './utils/storageUtils';
import ErrorBoundary from './components/ErrorBoundary';
import { LANG_SUPPORT, LANG_TYPE_DEFAULT, LANG_STORAGE_DEFAULT } from './constants/constants';
// 配置自定义toast
import 'react-toastify/dist/ReactToastify.min.css';
// 处理webApp延迟300ms的解决方案
initReactFastClick();

toast.configure({
  autoClose: 3000,
  draggable: true,
  transition: Zoom,
  rtl: false, // 显示方向， true表示从又到左
  type: toast.TYPE.INFO,
  hideProgressBar: false,
  position: toast.POSITION.TOP_LEFT,
  pauseOnHover: true,
});

const store = configureStore();

const NODE_MOUNT = document.getElementById('root');

const renderApp = (storageLangType) => render(
  <LocaleProvider locale={storageLangType !== 'zh-CN' ? enUS : undefined}>
    <Provider store={store}>
      <Router history={history}>
        <AppContainer>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </AppContainer>
      </Router>
    </Provider>
  </LocaleProvider>,
  NODE_MOUNT,
);


const runApp = (statusFlag) => {
  renderApp(statusFlag);
  if (module.hot) {
    module.hot.accept();
  }
};

/**
 * 整个工程 locale 初始化配置
 * 1. 取storage中语言设置，没有走第二步
 * 2. 获取当前系统语言
 */
const loadLocales = () => {
  let storageLangType = storage.getItem(LANG_STORAGE_DEFAULT.lang_type);
  if (!storageLangType) {
    const navigatorLangType = window.navigator.language;
    // 如果从 当前系统 中获取的语言跟 APP设置的默认值不一样（constants.LOCALES_SUPPORT，这里的值，需要重新设置默认值
    const locales_support_array = LANG_SUPPORT || [];
    for (const item of locales_support_array) {
      if (item && item.value === navigatorLangType) {
        storageLangType = navigatorLangType;
        storage.setItem(LANG_STORAGE_DEFAULT.lang_type, storageLangType);
        break;
      }
    }
    if (!storageLangType) {
      storageLangType = LANG_TYPE_DEFAULT;
      storage.setItem(LANG_STORAGE_DEFAULT.lang_type, storageLangType);
    }
  }
  // 国际化初始化开始
  intl.init({
    currentLocale: storageLangType,
    locales,
  }).then(() => {
    runApp(storageLangType);
  });
};

// 执行国际化初始化，成功之后加载整个APP
loadLocales();

