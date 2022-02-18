import Hotel from "../model/Hotel";
import HotelDetails from "../model/HotelDetails";

export type FilterAction =
  | "CHANGED_RATING"
  | "CHANGED_ADULTS"
  | "CHANGED_CHILDREN"
  | "CHANGED_RATING";

export type Action =
  | { type: "STARTED_LOADING" }
  | { type: "DOWNLOADED_HOTELS"; payload: Hotel[] }
  | { type: "DOWNLOADED_HOTEL_DETAILS"; payload: HotelDetails[] }
  | { type: "CHANGED_RATING"; payload: number }
  | { type: "CHANGED_ADULTS"; payload: number }
  | { type: "CHANGED_CHILDREN"; payload: number };
