import {combineReducers, legacy_createStore} from 'redux'
import {Reducer as appReducer} from './AppReducer/Reducer'
import { reducer as authReducer } from './AuthReducer/reducer';

const rootReducer= combineReducers({appReducer,authReducer})

export const store= legacy_createStore(rootReducer);