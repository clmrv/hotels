import { Action } from "./actions";
import { State } from "./state";

const reducer = (state: State, action: Action) => {
  const payload = action.payload;
  switch (action.type) {
    case "downloadedHotels":
      return { ...state, hotels: payload.hotels };

    default:
      return state;
  }
};

export default reducer;
