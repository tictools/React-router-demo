import { updateContact } from "@src/api/contacts";

export const highlightContactAction = async function ({ request, params }) {
  const formData = await request.formData();
  const favorite = formData.get("favorite") === "true";

  return updateContact(params.contactId, {
    favorite,
  });
};
