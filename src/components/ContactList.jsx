import { NavLink } from "react-router-dom";
import { ContactLinkName } from "./ContactLinkName";

export const ContactList = function ({ contacts }) {
  const getLinkState = (linkStates) =>
    linkStates.isActive ? "active" : linkStates.isPending ? "pending" : "";

  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <NavLink to={`contacts/${contact.id}`} className={getLinkState}>
              <ContactLinkName contact={contact} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
