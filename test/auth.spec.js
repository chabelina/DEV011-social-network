/**
 * @jest-environment jsdom
 */

// importamos la funcion que vamos a testear
// import { loginEmail } from '../src/firebase/auth.js';
import { loginView } from '../src/componentes/login.js';
import { pupUpDelete } from '../src/componentes/deletePost.js';
import { newAccount } from '../src/componentes/newAccount.js';
import { navigateTo } from '../src/main.js';

jest.mock('../src/firebase/auth.js', () => {

});
// test de funcionalidad
describe('Test for loginView', () => {
  describe('test for DOM', () => {
    test('have a button', () => {
      const DOM = document.createElement('div');
      DOM.append(loginView());
      const haveAButton = DOM.querySelector('#loginButton');
      expect(haveAButton).not.toBe(undefined);
    });
  });
  describe('test for functions', () => {
    it('it is a function', () => {
      expect(typeof loginView).toBe('function');
    });
  });
});
describe('Test for pupUpDelete', () => {
  it('it is a delete', () => {
    console.log(typeof popUpDelete);
    expect(typeof pupUpDelete).toBe('function');
  });
  test('have a delete button', () => {
    const DOM = document.createElement('div');
    DOM.append(pupUpDelete());
    const haveAButton = DOM.querySelector('#deleteButton');
    expect(typeof haveAButton).toBe('object');
  });
});
describe('Test for NewAccount', () => {
  test('call navigateTo function after clicking newAccount button', async () => {
    const DOM = document.createElement('div');
    jest.fn('../src/main.js');
    DOM.append(newAccount(navigateTo));
    const createUserButton = DOM.querySelector('#newAccountButton');
    navigateTo.mockImplementationOnce(() => {});
    await createUserButton.click();
    expect(navigateTo).toHaveBeenCalled();
  });
});
