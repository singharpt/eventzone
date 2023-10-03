import React, { createContext, useContext, useState } from "react";

export const Context = createContext(null);

export function ContextProvider({ children }) {
  // const [locations, setLocations] = useState([
  //   {
  //     address: "1323 N Stemmons Fwy Dallas TX 75207",
  //     id: "1",
  //     image: "https://assets.livenationcdn.com/uploads/the-echo_pr.jpg",
  //     name: "The Echo Lounge & Music Hall",
  //   },
  // ]);

  const [locations, setLocations] = useState([]);

  return (
    <Context.Provider value={{ locations, setLocations }}>
      {children}
    </Context.Provider>
  );
}
