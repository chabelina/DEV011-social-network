/**
 * @jest-environment jsdom
 */

import { newPost } from '../src/componentes/newPost';

describe('Test para el modal de newPost:', () => {
  jest.mock('../src/firebase/firestore', () => ({
    insertPostDB: jest.fn(),
  }));
  const emptyStrTest = '     ';
  test('valida que no se envíe un texto vacío', async () => {
    jest.mock('../src/firebase/firestore', () => ({
      updateLikes: jest.fn(),
    }));
    document.body.innerHTML = '<div id="container"></div>';
    const container = document.getElementById('container');
    container.appendChild(newPost('userID123'));
    const buttonSaveNewPost = document.getElementById('buttonSaveNewPost');
    const inputTextPost = document.getElementById('alertInput');
    inputTextPost.value = emptyStrTest;
    const msjEmptyPost = document.getElementById('errorMessage');
    console.log(msjEmptyPost);
    await buttonSaveNewPost.click();
    expect(msjEmptyPost.innerText).toEqual('Necesitas insertar texto en tu recomendación');
  });
});
