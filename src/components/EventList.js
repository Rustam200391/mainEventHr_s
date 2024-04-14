import React from "react";
import EventItem from "./EventItem";

function EventList({ events }) {
  return (
    <ul>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
