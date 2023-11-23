/**
 * @jest-environment jsdom
 */
import * as validation from '../src/validations/validLogin.js';

describe('Test para el formato de los imputs', () => {
  test('formato valido de email y password', () => {
    const inputEmail = document.createElement('input');
    inputEmail.value = 'maya@correo.com';
    const inputPassword = document.createElement('div');
    const password = document.createElement('input');
    password.value = '123456';
    inputPassword.appendChild(password);
    expect(validation.inputsFormats(inputEmail, inputPassword)).toEqual(true);
  });

  test('formato invalido de email', () => {
    const inputEmail = document.createElement('input');
    inputEmail.value = 'mayacorreo.com';
    const inputPassword = document.createElement('div');
    const password = document.createElement('input');
    password.value = '123456';
    inputPassword.appendChild(password);
    expect(() => validation.inputsFormats(inputEmail, inputPassword)).toThrow('Email invalido');
  });

  test('formato invalido de password', () => {
    const inputEmail = document.createElement('input');
    inputEmail.value = 'maya@correo.com';
    const inputPassword = document.createElement('div');
    const password = document.createElement('input');
    password.value = 'aeio ';
    inputPassword.appendChild(password);
    expect(() => validation.inputsFormats(inputEmail, inputPassword)).toThrow('La contraseña:\n-no debe contener espacios\n-debe contener al menos un número\n-debe tener al menos 6 dígitos');
  });
});
