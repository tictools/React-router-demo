import { useLoaderData } from "react-router-dom";

export const useContactsDataLoader = function () {
  const { contacts } = useLoaderData();

  return {
    contacts,
    hasContacts: !!contacts.length,
  };
};
