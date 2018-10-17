import { compose } from "recompose";
import Trades from './Trades';
import { connect } from 'react-redux';

const mapStateToProps = ({ trade }) => ({
    trades: trade.trades,
});

export default compose(
    connect(mapStateToProps),
)(Trades);