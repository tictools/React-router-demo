import { Favorite } from "@components";
import { useContactLoaderData } from "@src/hooks";
import { Form, Link } from "react-router-dom";

export const Contact = function () {
  const { contact } = useContactLoaderData();
  return (
    <div id="contact">
      <div className="contact__info">
        <div>
          <img key={contact.avatar} src={contact.avatar || null} />
        </div>

        <div>
          <Favorite contact={contact} />
          <h1>
            {contact.first || contact.last ? (
              <>
                {contact.first} {contact.last}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
          </h1>

          {contact.twitter && (
            <p>
              <a
                target="_blank"
                href={`https://twitter.com/${contact.twitter}`}
              >
                {contact.twitter}
              </a>
            </p>
          )}

          {contact.notes && <p>{contact.notes}</p>}

          <div>
            <Form action="edit">
              <button type="submit">Edit</button>
            </Form>
            <Form
              method="post"
              action="destroy"
              onSubmit={(event) => {
                if (
                  !confirm("Please confirm you want to delete this record.")
                ) {
                  event.preventDefault();
                }
              }}
            >
              <button type="submit">Delete</button>
            </Form>
          </div>
        </div>
      </div>
      <Link className="" to="/">
        Go to list
      </Link>
    </div>
  );
};
