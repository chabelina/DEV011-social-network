/**
 * @jest-environment jsdom
 */

import { renderPost } from '../src/componentes/publications';

describe('Test para el botón de like', () => {
  // Mock the updateLikes function
  jest.mock('../src/firebase/firestore', () => ({
    updateLikes: jest.fn(),
  }));

  const userID = 'mockUserID';
  const idPostDB = 'mockIDPostDB';
  const isLoggedUser = true;
  const userNameDB = 'mockUserName';
  const textPostDB = 'mockTextPost';
  const likesDB = ['user1', 'user2'];

  test('Cuando se da like cambia la imagen', async () => {
    document.body.innerHTML = '<div id="container"></div>';
    const container = document.getElementById('container');
    container.appendChild(renderPost(
      container,
      userID,
      idPostDB,
      isLoggedUser,
      userNameDB,
      textPostDB,
      likesDB,
    ));

    const likeButton = document.getElementById('likeButton');
    const filledLikeImg = document.getElementById('likeImg');
    const unfilledLikeImg = document.getElementById('unlikeImg');

    // Check initial styles
    console.log(unfilledLikeImg);
    expect(unfilledLikeImg.style.display).toBe('flex');
    expect(filledLikeImg.style.display).toBe('none');

    // Simulate a click on the like button
    console.log(likesDB);
    await likeButton.click();
    console.log(likesDB);

    // Check styles after the click
    expect(filledLikeImg.style.display).toBe('flex');
    expect(unfilledLikeImg.style.display).toBe('none');
  });
});

//
// /**
//  * @jest-environment jsdom
//  */

// import { publications } from '../src/componentes/publications';
// import { async } from 'regenerator-runtime';
// import * as publications from '../src/componentes/publications';
// import { navigateTo } from '../src/main';
// import * as mainModule from '../src/main.js';

// import * as imagesMock from '../src/fileMocks.js';
// import { navigateTo } from '../src/main';

/* describe.only('Test para el boón de like', () => {
  jest.spyOn(publications, 'publications');
  const DOM = document.createElement('div');
  const navigateTo = jest.fn();
  test('Cuando se da like cambia la imagen', async () => {
    DOM.append(await publications.publications(navigateTo));
    console.log(DOM.innerHTML);
    const likeButton = DOM.querySelector('.containerAllPublications');
    const filledLikeImg = DOM.querySelector('#likeImg');
    console.log(likeButton);
    console.log(filledLikeImg);
    await likeButton.click();
    expect(likeButton).not.toBeNull();
    // expect(filledLikeImg.style.display).toBe('holi');
  });
});
 */
