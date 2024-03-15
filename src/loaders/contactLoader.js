import { getContact } from "@src/api/contacts";
import { throwResponse } from "@src/utils";

export const contactLoader = async function ({ params }) {
  const contact = await getContact(params.contactId);

  if (!contact)
    throwResponse({
      status: 404,
      statusText: "Contact not found",
    });

  return { contact };
};
