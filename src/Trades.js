import React from 'react';
import Trade from './Trade';

const Trades = ({
    trades,
}) => (
    <table>
        <tbody>
            <tr>
                <th>Stock Symbol</th>
                <th>Price</th>
                <th>Number of Shares</th>
            </tr>
            {trades.map(trade => (
                <Trade
                    key={trade.timeStamp}
                    {...trade}
                />
            ))}
        </tbody>
    </table>
);

export default Trades;