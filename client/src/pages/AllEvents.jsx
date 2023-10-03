import React, { useState, useEffect, useContext } from "react";
import Event from "../components/Event";
import "../css/LocationEvents.css";
import { Context } from "../components/ContextProvider";
import EventAPI from "../services/EventAPI";
import LocationsAPI from "../services/LocationsAPI";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const { locations, setLocations } = useContext(Context);

  useEffect(() => {
    (async () => {
      try {
        const locationData = await LocationsAPI();
        const eventsData = await EventAPI();
        setLocations(locationData);
        setEvents(eventsData);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  const getSelectedEvents = (e) => {
    let filteredEvents = [];
    let locId = e.target.value;
    if (locId === "0") {
      filteredEvents = events;
    } else {
      filteredEvents = events.filter((item) => item.location === locId);
    }
    setSelectedEvents(filteredEvents);
    console.log(selectedEvents);
  };

  return (
    <div className="location-events">
      <select onChange={(e) => getSelectedEvents(e)}>
        <option value="#">Select Location</option>
        <option value="0">Show All Locations</option>
        {locations.map((loc) => (
          <option key={loc.id} value={loc.id}>
            {loc.name}
          </option>
        ))}
      </select>
      <main>
        {selectedEvents && selectedEvents.length > 0 ? (
          selectedEvents.map((event) => (
            <Event
              key={event.id}
              id={event.id}
              title={event.name}
              image={event.image}
            />
          ))
        ) : (
          <h2
            style={{
              color: "black",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            {"Select location to view events!"}
          </h2>
        )}
      </main>
    </div>
  );
};

export default AllEvents;
