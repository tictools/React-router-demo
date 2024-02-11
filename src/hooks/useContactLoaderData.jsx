import { useLoaderData } from "react-router-dom";

export const useContactLoaderData = function () {
  const { contact } = useLoaderData();

  return {
    contact,
  };
};
