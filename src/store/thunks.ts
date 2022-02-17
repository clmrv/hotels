import Hotel from "../model/Hotel";
import { Action } from "./actions";

export const getHotels = () => async (dispatch: (action: Action) => void) => {
  try {
    dispatch({ type: "STARTED_LOADING" });
    const res = await fetch(
      "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
    );
    const data: Hotel[] = await res.json();
    dispatch({ type: "DOWNLOADED_HOTELS", payload: data });
  } catch {
    alert("Server error");
  }
};
