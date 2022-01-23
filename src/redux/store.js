import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from './sagas/rootsaga';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(watcherSaga);
