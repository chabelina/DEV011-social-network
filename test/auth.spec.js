// importamos la funcion que vamos a testear
import { loginGoogle, logout, loginEmail } from '..src/firebase/auth.js';
import { NewAccount } from '..src/componentes/newAccount.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});