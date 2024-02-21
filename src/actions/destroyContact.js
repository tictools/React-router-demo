import { deleteContact } from "@src/api/contacts";
import { redirect } from "react-router-dom";

export const deleteContactAction = async function ({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
};
