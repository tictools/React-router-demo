import {
  useContactsLoaderData,
  useSearchingBy,
  useUpdateRefValueBy,
} from "@src/hooks";
import { Form, useSubmit } from "react-router-dom";

export const ContactForm = function () {
  const submit = useSubmit();

  const { query } = useContactsLoaderData();
  const { isSearching } = useSearchingBy({ param: "q" });
  const { inputRef } = useUpdateRefValueBy({ query });

  const handleSubmit = (event) => {
    submit(event.currentTarget.form);
  };

  return (
    <div>
      <Form id="search-form" role="search">
        <input
          ref={inputRef}
          className={isSearching ? "loading" : ""}
          id="q"
          aria-label="Search contacts"
          placeholder="Search"
          type="search"
          name="q"
          defaultValue={query}
          onChange={handleSubmit}
        />
        <div id="search-spinner" aria-hidden hidden={!isSearching} />
        <div className="sr-only" aria-live="polite"></div>
      </Form>
      <Form method="post">
        <button type="submit">New</button>
      </Form>
    </div>
  );
};
