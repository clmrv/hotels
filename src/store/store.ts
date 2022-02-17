import { applyMiddleware, createStore } from "redux";
import Hotel from "../model/Hotel";
import reducer from "./reducer";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { Action } from "./actions";

export interface Filters {
  stars: number;
  adults: number;
  children: number;
}

export interface State {
  hotels: Hotel[];
  filters: Filters;
  loading: boolean;
}

export const initialState: State = {
  hotels: [],
  filters: {
    stars: 0,
    adults: 1,
    children: 0,
  },
  loading: false,
};

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAppDispatch = ThunkDispatch<State, void, Action>;
