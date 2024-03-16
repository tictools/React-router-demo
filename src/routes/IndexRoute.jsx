import { ContactCard } from "@src/components";
import { useContactsLoaderData } from "@src/hooks";

export const IndexRoute = function () {
  const { contacts } = useContactsLoaderData();

  return (
    <div id="contact-list">
      <header>
        <h1>Contacts</h1>
      </header>
      <ul className="contact-list__grid">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};
