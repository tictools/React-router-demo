import { getContacts } from "@src/api/contacts";

export const loader = async function () {
  const contacts = await getContacts();
  return { contacts };
};
