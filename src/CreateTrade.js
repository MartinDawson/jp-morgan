import React from 'react';
import { Field } from 'redux-form';
import stocksData from './StocksData.json';

const CreateTrade = ({
    handleSubmit,
}) => (
    <form onSubmit={handleSubmit} action="">
        <Field
            name="symbol"
            component="select"
        >
            <option></option>
            {stocksData.stocks.map(stock => (
                <option key={stock.symbol} value={stock.symbol}>
                    {stock.symbol}
                </option>
            ))}
        </Field>
        <Field
            name="price"
            component="input"
            parse={value => Number(value)}
            type="number"
            placeholder="Price"
        />
        <Field
            name="numberOfShares"
            component="input"
            parse={value => Number(value)}
            type="number"
            placeholder="Number Of Shares"
        />
        <button>Create Trade</button>
    </form>
);

export default CreateTrade;