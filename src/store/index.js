import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from '../redux/index';
import rootSagas from "../sagas";

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension
    ? window.devToolsExtension()
    : function (f) {
      return f;
    }
  ))
export const persistor = persistStore(store)
sagaMiddleware.run(rootSagas)

// export default store;