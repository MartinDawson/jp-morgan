import { actions } from "./Constants";

export const createTrade = (symbol, price, numberOfShares) => ({
    type: actions.createTrade,
    payload: {
        symbol,
        price,
        numberOfShares,
    },
})