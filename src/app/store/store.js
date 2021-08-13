import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import appReducer from './reducers';

console.log(appReducer);

const sagaMiddleware = createSagaMiddleware();

const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);

    window.localStorage.setItem('app_state', serialisedState);
  } catch (error) {
    // console.log(error);
  }
};

const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem('app_state');

    if (!serialisedState) return undefined;

    return JSON.parse(serialisedState);
  } catch (error) {
    return undefined;
  }
};

const oldState = loadState();

const store = createStore(
  appReducer,
  oldState,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

// store.dispatch({
//   type: 'LOGGED_IN',
//   payload: {
//     login: 'fskjhskjf',
//     password: '12324',
//     isLogged: true,
//   },
// });

// console.log(store.getState());
store.subscribe(() => {
  saveState(store.getState());
});

sagaMiddleware.run(rootSaga);

export default store;
