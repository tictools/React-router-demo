import { redirect } from "react-router-dom";

import { createContact } from "@src/api/contacts";

export const createContactAction = async function () {
  const contact = await createContact();
  return redirect(`contacts/${contact.id}/edit`);
};
