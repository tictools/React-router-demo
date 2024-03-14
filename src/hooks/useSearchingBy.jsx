import { useNavigation } from "react-router-dom";

export const useSearchingBy = ({ param }) => {
  const navigation = useNavigation();

  const isSearching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(param);

  return { isSearching };
};
