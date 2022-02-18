import { applyMiddleware, createStore } from "redux";
import Hotel from "../model/Hotel";
import reducer from "./reducer";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { Action } from "./actions";
import HotelDetails from "../model/HotelDetails";

export interface Filters {
  rating: number;
  adults: number;
  children: number;
}

export interface State {
  hotels: Hotel[];
  details: HotelDetails[];
  filters: Filters;
  loading: boolean;
}

export const initialState: State = {
  hotels: [],
  details: [],
  filters: {
    rating: 0,
    adults: 1,
    children: 0,
  },
  loading: false,
};

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAppDispatch = ThunkDispatch<State, void, Action>;
