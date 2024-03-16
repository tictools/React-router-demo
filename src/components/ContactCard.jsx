import { Link } from "react-router-dom";

export const ContactCard = ({ contact }) => {
  const { id, first = "", last = "", favorite, avatar } = contact;

  const hasName = !!first || !!last;
  const fullName = hasName ? `${first} ${last}` : "No name";

  const emptyAvatarClassName = avatar ? "" : "contact-list__avatar--empty";

  return (
    <li>
      <Link to={`contacts/${id}`}>
        <div className={`contact-list__avatar ${emptyAvatarClassName}`}>
          <span>{favorite ? "★" : "☆"}</span>
          <img loading="lazy" src={avatar} />
        </div>
        <p> {fullName.trim()} </p>
      </Link>
    </li>
  );
};
