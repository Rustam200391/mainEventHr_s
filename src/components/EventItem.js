import React from "react";

function EventItem({ event }) {
  return (
    <li>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Срок: {event.date}</p>
    </li>
  );
}

export default EventItem;
