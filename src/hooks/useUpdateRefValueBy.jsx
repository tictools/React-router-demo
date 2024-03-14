import { useEffect, useRef } from "react";

export const useUpdateRefValueBy = ({ query }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = query;
  }, [query]);

  return {
    inputRef,
  };
};
