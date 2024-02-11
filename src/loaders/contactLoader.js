import { getContact } from "@src/api/contacts";

export const contactLoader = async function ({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
};
