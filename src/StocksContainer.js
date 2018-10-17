import { compose, withProps } from "recompose";
import Stocks from './Stocks';
import StocksData from './StocksData.json';

export default compose(
    withProps({
        stocks: StocksData.stocks,
    }),
)(Stocks);