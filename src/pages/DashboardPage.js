import React from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

function DashboardPage() {
  const handleSubmitEvent = (eventData) => {
    // Обработка создания/редактирования мероприятия
  };

  const events = []; // Получение списка мероприятий

  return (
    <>
      <div>
        <h2>Панель управления</h2>
        <EventForm onSubmit={handleSubmitEvent} />
        <EventList events={events} />
      </div>
    </>
  );
}

export default DashboardPage;
