import { createContact } from "@src/api/contacts";

export const createContactAction = async function () {
  const contact = await createContact();
  return { contact };
};
