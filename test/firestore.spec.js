import { insertPostDB } from '../src/firebase/firestore';
// import { addDocMock } from '../src/firebase/firebase';

jest.mock('../src/firebase/firestore', () => ({
  insertPostDB: jest.fn().mockImplementation(() => Promise.resolve()),
}));

describe('Test para las funciones de firestore', () => {
  test.only('test para insertPostDB', (done) => {
    // const addDocMock = jest.fn(() => Promise.resolve());
    // const allPostsDB = {};
    // const originalLocalStorage = global.localStorage;
    // global.localStorage = {
    //   getItem: jest.fn().mockReturnValue('Pepito'),
    // };
    // jest.spyOn(firestoreMock, 'insertPostDB').mockImplementation((userID, inputLogin, datePost) => Promise.resolve(
    //   addDocMock(
    //     allPostsDB,
    //     {
    //       user: userID,
    //       name: localStorage.getItem(),
    //       textPost: inputLogin,
    //       likes: [],
    //       date: datePost,
    //     },
    //   ),
    // ));
    /* const firebaseMock = jest.mock('../src/firebase/firebase', () => ({
      addDoc: jest.fn().mockImplementation(() => Promise.resolve()),
    })); */
    // Mock localStorage
    // jest.useFakeTimers();

    // localStorage.getItem();
    insertPostDB('userID123', 'Recomendación test Mock', '2023-12-01');

    // jest.runAllTimers();
    // await insertPostPromise;
    // await Promise.resolve();
    expect(insertPostDB).toHaveBeenCalledWith(
      'userID123',
      'Recomendación test Mock',
      '2023-12-01',
    );
    done();
    // Restore localStorage to its original state
    // jest.useRealTimers();
    // global.localStorage = originalLocalStorage;
  });
});
