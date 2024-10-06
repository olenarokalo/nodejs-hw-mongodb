import { contactsCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await contactsCollection.find();
  return contacts;
};

export const getContactById = async (Id) => {
  const contact = await contactsCollection.findById(Id);
  return contact;
};
