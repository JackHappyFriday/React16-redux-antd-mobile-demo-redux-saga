/* https://redux.js.org/recipes/configuring-your-store */
/* https://github.com/supasate/connected-react-router#step-2 */

import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import history from '@history';
import createRootReducer from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = createRootReducer(history);

export default function configureStore(preloadedState) {
  const middlewares = [
    routerMiddleware(history),
    sagaMiddleware,
    logger,
  ];

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers,
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducer/index', () => {
      console.log('reduce--------');
      store.replaceReducer(rootReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
}

