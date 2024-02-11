import { useLoaderData } from "react-router-dom";

export const useContactDataLoader = function () {
  const { contact } = useLoaderData();

  return {
    contact,
  };
};
