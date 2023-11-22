/**
 * @jest-environment jsdom
 */
import { error } from '../src/componentes/error.js';

describe('error', () => {
  it('debería ser una función', () => {
    expect(error().textContent).toEqual('Upsi!, Error 404 page no found, please go home');
  });
});
