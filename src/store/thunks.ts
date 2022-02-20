import Hotel from "../model/Hotel";
import { Action, FilterAction } from "./actions";

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
    const details = await fetchDetails(data);

    for (let i = 0; i < data.length; i++) {
      data[i].details = details[i];
    }

    dispatch({ type: "DOWNLOADED_HOTELS", payload: data });
  } catch {
    alert("Server error");
  }
};

export const handleFilterChange =
  (dispatch: (action: Action) => void) =>
  (actionType: FilterAction) =>
  (value: number) => {
    dispatch({ type: "STARTED_LOADING" });
    setTimeout(() => dispatch({ type: actionType, payload: value }), 250);
  };
