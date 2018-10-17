import React from 'react';
import CreateTrade from './CreateTradeContainer';
import Trades from './TradesContainer';
import Stocks from './StocksContainer';

const App = () => (
  <div>
    <br />
    <CreateTrade />
    <br />
    <br />
    Trades:
    <Trades />
    <br />
    <br />

    Stocks:
    <Stocks />
  </div>
);

export default App;
