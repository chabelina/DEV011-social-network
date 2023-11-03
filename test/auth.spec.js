// importamos la funcion que vamos a testear
import { loginGoogle } from '../src/firebase/auth.js';
// import { NewAccount } from '..src/componentes/newAccount.js';

describe('Test de los componente Login', () => {
  it('debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });
});
