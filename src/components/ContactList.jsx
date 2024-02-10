import { Link } from "react-router-dom";

import { ContactLinkName } from "./ContactLinkName";

export const ContactList = function ({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Link to={`contacts/${contact.id}`}>
            <ContactLinkName contact={contact} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
