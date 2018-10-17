import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import CreateTradeContainer from './CreateTradeContainer';
import CreateTrade from './CreateTrade';
import { createTrade } from './CreateTradeActions';

jest.mock('./CreateTrade');

const setup = (newProps, newState) => {
    const props = {
      ...newProps,
    };
  
    const store = configureMockStore()({
      ...newState,
    });
    const root = mount(
      <Provider store={store}>
        <CreateTradeContainer {...props} />
      </Provider>);
    const wrapper = root.find(CreateTrade);
  
    return {
      root,
      wrapper,
      props,
    };
};

describe('CreateTradeContainer', () => {
    test('dispatches createTrade with the correct values on form submit', () => {
        const { wrapper } = setup();
        const values = {
            symbol: 'SAM',
            price: 135435,
            numberOfShares: 33,
        };
        const dispatch = jest.fn();

        wrapper.props().onSubmit(values, dispatch);

        expect(dispatch).toHaveBeenCalledWith(createTrade(values.symbol,
            values.price, values.numberOfShares));
    });
});