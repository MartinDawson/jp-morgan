import { actions } from './Constants';

const initialState = {
    trades: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.createTrade:          
            const trades = [...state.trades] 
            
            trades.unshift({
                timeStamp: Date.now(),
                ...action.payload,
            });

            return {
                ...state,
                trades,
            }
        default:
            return state;
    }
}