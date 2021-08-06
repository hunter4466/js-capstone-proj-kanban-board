/**
 * @jest-environment jsdom
 */
import simClearHtml from './__Mocks__/body';
import {countItems} from '../itemsCounter';

describe('Counters work good', () => {
  test('Items Counter works', () => {
      simClearHtml();
    const toBuildArray = document.querySelectorAll('.hd_item')
    expect(countItems(toBuildArray)).toEqual(4);
  });
  
// here comest your test
  test('Items Counter works', () => {
    simClearHtml();
  const toBuildArray = document.querySelectorAll('.hd_item')
  expect(countItems(toBuildArray)).toEqual(4);
});
//here ends your test
});