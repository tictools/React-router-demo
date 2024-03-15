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
    const isFirstSearch = query === null;
    submit(event.currentTarget.form, {
      replace: !isFirstSearch,
    });
  };

  return (
    <div>
      <Form id="search-form" role="search">
        <input
          ref={inputRef}
          className={isSearching ? "loading" : ""}
          type="search"
          id="q"
          name="q"
          placeholder="Search"
          defaultValue={query}
          onChange={handleSubmit}
          aria-label="Search contacts"
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
