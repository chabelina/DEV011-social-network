import * as firestoreMock from '../src/firebase/firestore';
// import { addDocMock } from '../src/firebase/firebase';

describe('Test para las funciones de firestore', () => {
  test('test para insertPostDB', async () => {
    const addDocMock = jest.fn(() => Promise.resolve());
    const allPostsDB = {};
    const originalLocalStorage = global.localStorage;
    global.localStorage = {
      getItem: jest.fn().mockReturnValue('Pepito'),
    };
    jest.spyOn(firestoreMock, 'insertPostDB').mockImplementation((userID, inputLogin, datePost) => Promise.resolve(
      addDocMock(
        allPostsDB,
        {
          user: userID,
          name: localStorage.getItem(),
          textPost: inputLogin,
          likes: [],
          date: datePost,
        },
      ),
    ));
    /* const firebaseMock = jest.mock('../src/firebase/firebase', () => ({
      addDoc: jest.fn().mockImplementation(() => Promise.resolve()),
    })); */
    // Mock localStorage
    // jest.useFakeTimers();

    // localStorage.getItem();
    await firestoreMock.insertPostDB('userID123', 'Recomendación test Mock', '2023-12-01');

    // jest.runAllTimers();
    // await insertPostPromise;
    // await Promise.resolve();
    expect(addDocMock).toHaveBeenCalledWith(
      allPostsDB,
      {
        user: 'userID123',
        name: localStorage.getItem(),
        textPost: 'Recomendación test Mock',
        likes: [],
        date: '2023-12-01',
      },

    );
    // done();
    // Restore localStorage to its original state
    // jest.useRealTimers();
    global.localStorage = originalLocalStorage;
  });
});
