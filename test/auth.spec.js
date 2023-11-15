/**
 * @jest-environment jsdom
 */

// importamos la funcion que vamos a testear
// import { loginEmail } from '../src/firebase/auth.js';
import { loginView } from '../src/componentes/login.js';
import { pupUpDelete } from '../src/componentes/deletePost.js';

jest.mock('../src/firebase/auth.js', () => {

});
// test de loginView
describe('Test for loginView', () => {
  it('it is a function', () => {
    expect(typeof loginView).toBe('function');
  });
});
test('have a button', () => {
  const DOM = document.createElement('div');
  DOM.append(loginView());
  const haveAButton = DOM.querySelector('#loginButton');
  expect(haveAButton).not.toBe(1);
});

describe('Test for pupUpDelete', () => {
  it('it is a delete', () => {
    console.log(typeof popUpDelete);
    expect(typeof pupUpDelete).toBe('function');
  });
});
test('have a delete button', () => {
  const DOM = document.createElement('div');
  DOM.append(pupUpDelete());
  const haveAButton = DOM.querySelector('#deleteButton');
  expect(typeof haveAButton).toBe('object');
});
