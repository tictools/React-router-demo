import { getContacts } from "@src/api/contacts";

export const contactsLoader = async function () {
  const contacts = await getContacts();
  return { contacts };
};
