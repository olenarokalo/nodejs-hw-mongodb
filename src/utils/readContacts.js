import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  const data = await readFile(PATH_DB, 'utf8');
  return JSON.parse(data);
};
