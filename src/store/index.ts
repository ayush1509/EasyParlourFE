import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducer';
import createSagaMidddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMidddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
