import Hotel from "../model/Hotel";

export type Action = { type: "downloadedHotels"; payload: { hotels: Hotel[] } };
