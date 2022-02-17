import { Action } from "./actions";
import { initialState, State } from "./store";

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "STARTED_LOADING":
      return { ...state, loading: true };

    case "DOWNLOADED_HOTELS":
      return { ...state, hotels: action.payload, loading: false };

    case "CHANGED_RATING":
      return {
        ...state,
        filters: { ...state.filters, rating: action.payload },
      };

    case "CHANGED_ADULTS":
      return {
        ...state,
        filters: { ...state.filters, adults: action.payload },
      };

    case "CHANGED_CHILDREN":
      return {
        ...state,
        filters: { ...state.filters, children: action.payload },
      };

    default:
      return state;
  }
};

export default reducer;
