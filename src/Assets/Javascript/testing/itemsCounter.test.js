/**
 * @jest-environment jsdom
 */
import simClearHtml from './__Mocks__/body';
import { countItems, countComments } from '../itemsCounter';

describe('Counters work good', () => {
  test('Items Counter works', () => {
    simClearHtml();
    const toBuildArray = document.querySelectorAll('.hd_item');
    expect(countItems(toBuildArray)).toEqual(4);
  });
});

describe('Comment Counters', () => {
  test('It should match the lenght of comments', () => {
    const comments = [
      {
        item_id: 'abbys',
        username: 'Robert',
        comment: 'This cat its beautiful',
      },
      {
        item_id: 'aege',
        username: 'Ronaldinho',
        comment: 'This cat its fat',
      },
      {
        item_id: 'aege',
        username: 'Messi',
        comment: 'This cat its a great player',
      },
    ];
    expect(countComments(comments)).toEqual(3);
  });
});