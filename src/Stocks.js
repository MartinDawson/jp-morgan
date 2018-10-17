import React from 'react';
import Stock from './StockContainer';

const Stocks = ({
    stocks
}) => (
    <table>
        <tbody>
            <tr>
                <th>Stock Symbol</th>
                <th>Dividend yield</th>
                <th>P/E Ratio</th>
                <th>Geometric Mean</th>
                <th>Volume Weighted</th>
            </tr>
            {stocks.map(stock => (
                <Stock
                    key={stock.symbol}
                    {...stock}
                />
            ))}
        </tbody>
    </table>
);

export default Stocks;