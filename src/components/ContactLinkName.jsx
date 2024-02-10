export const ContactLinkName = function ({ contact }) {
  return (
    <>
      {contact.first || contact.last ? (
        <>
          {contact.first} {contact.last}
        </>
      ) : (
        <i>No Name</i>
      )}{" "}
      {contact.favorite && <span>★</span>}
    </>
  );
};
