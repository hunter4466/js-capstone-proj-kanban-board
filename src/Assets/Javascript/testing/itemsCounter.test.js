/**
 * @jest-environment jsdom
 */
import simClearHtml from './__Mocks__/body';
import countItems from '../itemsCounter';

document.body.innerHTML = ` 
    <ul class="header">
      <li class="hd_item">
        <img class="logo_img" id="logo_img" alt="logo" src="">
      </li>
      <li class="hd_item">
        <a id='linkText1' alt="breed1">Cats</a>
      </li>
      <li class="hd_item">
        <a alt="breed2">Cougars</a>
      </li>
      <li class="hd_item">
        <a alt="breed3">Big cats</a>
      </li>
    </ul>
  `;

describe('Counters work good', () => {
  test('Items Counter works', () => {
    const toBuildArray = document.querySelectorAll('.hd_item');
    expect(countItems(toBuildArray)).toEqual(4);
  });
});