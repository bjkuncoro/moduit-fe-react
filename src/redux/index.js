import {combineReducers,createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import data from './data/reducer'

const appReducer = combineReducers({
    data,
})

const reducers = (state, action) => {
    if (action.type === 'user/LOGOUT') {
        // for all keys defined in your persistConfig(s)
        storage.removeItem('persist:root')
        // storage.removeItem('persist:otherKey')

        return appReducer(undefined, action);
    }
    return appReducer(state, action);
}

export default reducers;