import React from 'react';
import $ from '../../';
import 'babel-polyfill';

const $list = $(
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
);

const $list2 = $(
  <div>
    <ul></ul>
  </div>
);

describe('.first()', () => {
  it('returns the top-level tag by default', async () => {
    expect($list.first().nodeName).toBe('UL');
  });

  it('returns the first item of a list', async () => {
    expect($list.find('li').first().textContent).toEqual('A');
  });

  it('returns null value when no items found', async () => {
    expect($list2.find('li').first()).toEqual(null);
  });
});
