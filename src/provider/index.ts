import Hotel from "../model/Hotel";

export const getHotels = (callback: (data: Hotel[]) => void) =>
  fetch("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG")
    .then((res) => res.json())
    .then((data: Hotel[]) => callback(data))
    .catch((err) => alert("Server error."));
