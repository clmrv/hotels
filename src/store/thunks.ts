import Hotel from "../model/Hotel";
import { Action } from "./actions";

const fetchHotels = () =>
  fetch("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG").then(
    (res) => res.json()
  );

const fetchDetails = (hotels: Hotel[]) =>
  Promise.all(
    hotels.map((hotel) =>
      fetch(
        `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotel.id}`
      ).then((res) => res.json())
    )
  );

export const getHotels = () => async (dispatch: (action: Action) => void) => {
  try {
    dispatch({ type: "STARTED_LOADING" });

    const data: Hotel[] = await fetchHotels();
    dispatch({ type: "DOWNLOADED_HOTELS", payload: data });

    const details = await fetchDetails(data);
    dispatch({ type: "DOWNLOADED_HOTEL_DETAILS", payload: details });
  } catch {
    alert("Server error");
  }
};
