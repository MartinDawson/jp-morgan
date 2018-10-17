import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import StockContainer from './StockContainer';
import Stock from './Stock';

jest.mock('./Stock');

const setup = (newProps, newState) => {
    const props = {
      ...newProps,
    };
    const store = configureMockStore()({
        trade: { trades: [] },
      ...newState,
    });
    const root = mount(
      <Provider store={store}>
        <StockContainer {...props} />
      </Provider>);
    const wrapper = root.find(Stock);
  
    return {
      root,
      wrapper,
      props,
    };
};

const tradeState = {
    trade: {
        trades: [{
            symbol: 'SAM',
            price: 20,
            numberOfShares: 33,
        }, {
            symbol: 'SAM',
            price: 40,
            numberOfShares: 13,
        }],
    },
};

describe('StockContainer', () => {
    test('does not render stock when there are no trades', () => {
        const { wrapper } = setup();
        
        expect(wrapper).toHaveLength(0);
    });

    test('calculates dividendYield correctly for common types', () => {
        const { wrapper } = setup({
            symbol: 'SAM',
            type: 'Common',
            lastDividend: 100,
            parValue: 30,
        }, tradeState);
        
        expect(wrapper.props().dividendYield).toBe(5);
    });

    test('calculates dividendYield correctly for preferred types', () => {
        const { wrapper } = setup({
            symbol: 'SAM',
            type: 'Preferred',
            fixedDividend: 2,
            parValue: 30,
        }, tradeState);
        
        expect(wrapper.props().dividendYield).toBe(3);
    });

    test('calculates geometricMean correctly', () => {
        const { wrapper } = setup({
            symbol: 'SAM',
            type: 'Common',
            fixedDividend: 2,
            parValue: 30,
        }, tradeState);
        
        expect(Math.round(wrapper.props().geometricMean)).toBe(28);
    });

    test('calculates vwap correctly', () => {
        const { wrapper } = setup({
            symbol: 'SAM',
            type: 'Common',
            fixedDividend: 2,
            parValue: 30,
        }, tradeState);
        
        expect(Math.round(wrapper.props().volumeWeightedStockPrice)).toBe(26);
    });
});