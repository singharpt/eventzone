import React, { useState, useEffect, useContext } from "react";
import Event from "../components/Event";
import "../css/LocationEvents.css";
import { Context } from "../components/ContextProvider";
import UniqueEventAPI from "../services/UniqueEventAPI";

const LocationEvents = ({ index }) => {
  let { locations, setLocations } = useContext(Context);
  let currentUrl = window.location.href;
  currentUrl = currentUrl.split("/");
  const locationId = currentUrl[currentUrl.length - 1];
  let location = locations.filter((loc) => loc.id === locationId);
  location = location[0];

  const [events, setEvents] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const eventsData = await UniqueEventAPI(locationId);
        console.log(eventsData);
        setEvents(eventsData);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <div className="location-events">
      <header>
        <div className="location-image">
          <img src={location.image} />
        </div>

        <div className="location-info">
          <h2>{location.name}</h2>
          <p>{location.address}</p>
        </div>
      </header>

      <main>
        {events && events.length > 0 ? (
          events.map((event, index) => (
            <Event
              key={event.id}
              id={event.id}
              title={event.name}
              // date={event.date}
              image={event.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i>{" "}
            {"No events scheduled at this location yet!"}
          </h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;
