import { useNavigate } from "react-router-dom";

export const useNavigateTo = () => {
  const navigate = useNavigate();
  const navigateTo = (historyEntry) => navigate(historyEntry);

  return {
    navigateTo,
  };
};
