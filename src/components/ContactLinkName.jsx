export const ContactLinkName = function ({ contact }) {
  const name = [contact.first, contact.last].filter((item) => !!item).join(" ");

  const hasName = () => name.length !== 0;

  const linkLabel = hasName() ? <>{name}</> : <i>No Name</i>;

  return (
    <>
      {linkLabel} {contact.favorite && <span>★</span>}
    </>
  );
};
