import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tradeReducer from './tradeReducer';

const reducers = combineReducers({
    form: formReducer,
    trade: tradeReducer,
});

const store = createStore(reducers);

export default store;
