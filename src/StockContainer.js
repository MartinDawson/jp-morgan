import { compose, withProps, branch, renderNothing } from "recompose";
import Stock from './Stock';
import { connect } from 'react-redux';
import gmean from 'compute-gmean';
import vwap from 'vwap';

const mapStateToProps = ({ trade }, { symbol }) => ({
    currentTrades: trade.trades.filter(x => x.symbol === symbol),
});

const createProps = ({
    type,
    lastDividend,
    fixedDividend,
    parValue,
    currentTrades,
}) => {
    const latestPrice = currentTrades[0].price;
    const dividendYield = type === 'Common' ? lastDividend / latestPrice
        : (fixedDividend * parValue) / latestPrice;
    
    return {
        dividendYield,
        peRatio: latestPrice / dividendYield,
        geometricMean: gmean(currentTrades.map(x => x.price)),
        volumeWeightedStockPrice: vwap(currentTrades.map(x => [x.numberOfShares, x.price])),
    };
}


export default compose(
    connect(mapStateToProps),
    branch(
        ({ currentTrades }) => currentTrades.length === 0,
        renderNothing,
    ),
    withProps(createProps),
)(Stock);