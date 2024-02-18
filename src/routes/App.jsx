import { Outlet } from "react-router-dom";

import { ContactForm, ContactList, EmptyContactList } from "@src/components";
import { useContactsLoaderData, useOutletNavigation } from "@src/hooks";

export const App = function () {
  const { contacts, hasContacts } = useContactsLoaderData();

  const { isLoading } = useOutletNavigation();

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <ContactForm />
        <nav>
          {hasContacts ? (
            <ContactList contacts={contacts} />
          ) : (
            <EmptyContactList />
          )}
        </nav>
      </div>
      <div id="detail" className={isLoading ? "loading" : ""}>
        <Outlet />
      </div>
    </>
  );
};
