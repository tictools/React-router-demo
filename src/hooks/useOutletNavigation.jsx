import { useNavigation } from "react-router-dom";

export const useOutletNavigation = () => {
  const NAVIGATION_STATE = {
    LOADING: "loading",
    IDLE: "idle",
    SUBMITTING: "loading",
  };

  const { state } = useNavigation();

  const checkLoadingState = ({ state }) => state === NAVIGATION_STATE.LOADING;
  const checkIdleState = ({ state }) => state === NAVIGATION_STATE.IDLE;
  const checkSubmittingState = ({ state }) =>
    state === NAVIGATION_STATE.SUBMITTING;

  return {
    isLoading: checkLoadingState({ state }),
    isIdle: checkIdleState({ state }),
    isSubmitting: checkSubmittingState({ state }),
  };
};
