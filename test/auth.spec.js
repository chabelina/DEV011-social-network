/* // importamos la funcion que vamos a testear
import { loginGoogle, logout, loginEmail } from '..src/firebase/auth.js';
import { NewAccount } from '..src/componentes/newAccount.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
}); */

// importamos la funcion que vamos a testear
import { loginEmail } from '../src/firebase/auth.js';
// import { NewAccount } from '..src/componentes/newAccount.js';

jest.mock('..src/firebase/auth.js');

describe('Test de los componente loginEmail', () => {
  it('deberia crear sesion con email correctamente', () => {
    expect(typeof loginEmail).toBe('function');
  });
});
