import React, { useEffect, useReducer } from "react";
import reducer from "./store/reducer";
import { initialState } from "./store/state";
import { getHotels } from "./provider";
import HotelList from "./components/HotelList";
import Toolbar from "./components/Toolbar";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getHotels((hotels) =>
      dispatch({ type: "downloadedHotels", payload: { hotels } })
    );
  }, []);

  return (
    <>
      <Toolbar filters={state.filters} />
      {state.hotels ? (
        <HotelList hotels={state.hotels} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App;
