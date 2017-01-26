import React from 'react';
// import ReactDOM from 'react-dom';
import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(global.window);

export function renderComponent(ComponentClass, props, state) {
  TestUtils.renderIntoDocument(
    <ComponentClass
      ref={(component) => { this.component = component; }}
    />,
  );
  return $(this.component);
}
