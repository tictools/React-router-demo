import { useContactsLoaderData } from "@src/hooks";
import { Link } from "react-router-dom";

export const IndexRoute = function () {
  const { contacts } = useContactsLoaderData();

  return (
    <div id="contact-list">
      <header>
        <h1>Contacts</h1>
      </header>
      <ul className="contact-list__grid">
        {contacts.map((contact) => {
          const fullName = `${contact.first} ${contact.last}`;
          return (
            <li key={contact.id}>
              <Link to={`contacts/${contact.id}`}>
                <div className="contact-list__img">
                  <span>{contact.favorite ? "★" : "☆"}</span>
                  <img loading="lazy" src={contact.avatar} alt={fullName} />
                </div>
                <p> {fullName} </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
