import React from 'react';

const Stock = ({
    symbol,
    dividendYield,
    peRatio,
    geometricMean,
    volumeWeightedStockPrice,
}) => (
    <tr>
        <td>{symbol}</td>
        <td>{dividendYield}</td>
        <td>{peRatio}</td>
        <td>{geometricMean}</td>
        <td>{volumeWeightedStockPrice}</td>
    </tr>
);

export default Stock;