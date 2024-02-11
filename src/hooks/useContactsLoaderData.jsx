import { useLoaderData } from "react-router-dom";

export const useContactsLoaderData = function () {
  const { contacts } = useLoaderData();

  return {
    contacts,
    hasContacts: !!contacts.length,
  };
};
