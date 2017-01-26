import React from 'react';
// import ReactDOM from 'react-dom';
import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import reducers from '../src/reducers';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(global.window);

export function renderComponent(ComponentClass, props, state) {
  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass
        {...props}
        ref={(component) => { this.component = component; }}
      />
    </Provider>,
  );
  return $(this.component);
}

// set up jquery function to simulate events on ComponentClass
$.fn.simulate = (eventName, value) => {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

chaiJquery(chai, chai.util, $);

export { expect };
