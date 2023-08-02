import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {

const contactDb = await openDB('jate', 1);

const tx = contactDb.transaction('jate', 'readwrite');

const store = tx.objectStore('jate');

const request = store.add({  });

const result = await request;
console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

const contactDb = await openDB('jate', 1);

const tx = contactDb.transaction('jate', 'readonly');

const store = tx.objectStore('jate');

const request = store.getAll();

const result = await request;
console.log('🚀 - data retrieved from the database', result);
return result;
};

initdb();
