/**
 * @jest-environment jsdom
 */

// importamos la funcion que vamos a testear
// import { loginEmail } from '../src/firebase/auth.js';
import { loginView } from '../src/componentes/login.js';
import { pupUpDelete } from '../src/componentes/deletePost.js';
import { newAccount } from '../src/componentes/newAccount.js';
import * as mainModule from '../src/main.js';
import * as firestoreModule from '../src/firebase/firestore.js';
import * as authModule from '../src/firebase/auth.js';
import * as validLoginModule from '../src/validations/validLogin.js';

/* jest.mock('../src/lib/firebase', () => {
  // Se mockea todo el módulo firebaseAuth
  const originalModule = jest.requireActual('../src/lib/firebase');
  return {
    ...originalModule,
  createUserWithEmailAndPassword: jest.fn().mockResolvedValue({ user: { uid: '123' } }),
  };
}); */

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
    // console.log(typeof popUpDelete);
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
    // const inputsFormats = jest.fn(() => true);
    // inputsFormats.mockImplementation(() => true);
    // firestoreModule.insertNewUserDB.mockResolvedValue(true);
    // const navigateTo = jest.fn();
    // const insertNewUserDB = jest.fn(() => true);
    // firestoreModule.insertNewUserDB();
    // expect(navigateTo).toHaveBeenCalledTimes(1);
    // expect(navigateTo).toHaveBeenLastCalledWith('/publications');
    jest.spyOn(validLoginModule, 'inputsFormats').mockImplementation(() => true);
    jest.spyOn(authModule, 'createUser').mockImplementation(() => Promise.resolve());
    jest.spyOn(firestoreModule, 'insertNewUserDB').mockImplementation(() => Promise.resolve(true));
    jest.spyOn(mainModule, 'navigateTo').mockImplementation(() => {});
    const DOM = document.createElement('div');
    DOM.append(newAccount(mainModule.navigateTo()));
    const createUserButton = DOM.querySelector('#newAccountButton');
    await createUserButton.click();
    // await Promise.resolve();
    console.log(firestoreModule.insertNewUserDB());
    expect(validLoginModule.inputsFormats).toHaveBeenCalled();
    expect(authModule.createUser).toHaveBeenCalled();
    expect(authModule.createUser()).toEqual(Promise.resolve());
    expect(firestoreModule.insertNewUserDB).toHaveBeenCalled();
    expect(firestoreModule.insertNewUserDB()).toEqual(Promise.resolve(true));
    return expect(mainModule.navigateTo).toHaveBeenCalled();
  });
});
