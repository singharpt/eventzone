import React, { useState, useEffect } from "react";
import "../css/Event.css";

const Event = (event) => {
  const currentTime = Date.now();
  let eventTime = Date.parse(event.date);
  let remaining = eventTime - currentTime;
  let timeleft = {};
  let eventClosed = false;
  if (remaining < 0) {
    eventClosed = true;
  } else {
    timeleft = {
      minutes: Math.floor((remaining / 1000 / 60) % 60),
      hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
      days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
    };
  }

  eventTime = new Date(event.date);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const eventDate = {
    day: eventTime.getDate(),
    month: monthNames[eventTime.getMonth()],
    year: eventTime.getUTCFullYear(),
    hours: eventTime.getHours(),
    minutes: eventTime.getMinutes(),
  };

  return (
    <article className="event-information">
      <img src={event.image} />

      <div className="event-information-overlay">
        <div className="text">
          <h3>{event.title}</h3>
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i>{" "}
            {`${eventDate.month}, ${eventDate.day} ${eventDate.year} @${eventDate.hours} Hours ${eventDate.minutes} Mins`}
          </p>
          {eventClosed ? (
            <p
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px",
                fontSize: "15px",
              }}
            >
              Event Closed
            </p>
          ) : (
            <p
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px",
                fontSize: "15px",
              }}
            >
              {`Starts in: ${timeleft.days} days ${timeleft.hours} hours ${timeleft.minutes} mins  `}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default Event;
