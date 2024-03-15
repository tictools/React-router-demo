import { useLoaderData } from "react-router-dom";

export const useContactsLoaderData = function () {
  const { contacts, query } = useLoaderData();

  return {
    contacts,
    query,
    hasContacts: !!contacts.length,
  };
};
