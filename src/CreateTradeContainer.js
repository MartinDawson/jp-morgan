import CreateTrade from './CreateTrade';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';
import { formNames } from './Constants';
import { createTrade } from './CreateTradeActions';

export default compose(
    withHandlers({
        onSubmit: () => (values, dispatch) => {
            dispatch(createTrade(values.symbol, values.price, values.numberOfShares));
        },
    }),
    reduxForm({
        form: formNames.createTrade,
    }),
)(CreateTrade);