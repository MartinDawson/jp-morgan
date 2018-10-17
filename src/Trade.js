import React from 'react';

const Trade = ({
    symbol,
    price,
    numberOfShares,
}) => (
    <tr>
        <td>{symbol}</td>
        <td>{price}</td>
        <td>{numberOfShares}</td>
    </tr>
);

export default Trade;