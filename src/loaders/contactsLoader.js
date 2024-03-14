import { getContacts } from "@src/api/contacts";

export const contactsLoader = async function ({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  const contacts = await getContacts(query);
  return { contacts, query };
};
