import { createContactAction } from "./createContact";
import { deleteContactAction } from "./destroyContact";
import { updateContactAction } from "./editContact";

export const actions = {
  createContact: createContactAction,
  updateContact: updateContactAction,
  deleteContact: deleteContactAction,
};
