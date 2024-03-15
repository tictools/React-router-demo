import { createContactAction } from "./createContact";
import { deleteContactAction } from "./destroyContact";
import { updateContactAction } from "./editContact";
import { highlightContactAction } from "./highlightContact";

export const actions = {
  createContact: createContactAction,
  deleteContact: deleteContactAction,
  highlightContact: highlightContactAction,
  updateContact: updateContactAction,
};
