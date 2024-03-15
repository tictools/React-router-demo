import { useFetcher } from "react-router-dom";

export const Favorite = function ({ contact }) {
  const fetcher = useFetcher();

  let isFavorite = contact.favorite;

  if (fetcher?.formData) {
    isFavorite = fetcher.formData.get("favorite") === "true";
  }

  return (
    <fetcher.Form className="favorite-form" method="post">
      <button
        name="favorite"
        value={isFavorite ? "false" : "true"}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
};
